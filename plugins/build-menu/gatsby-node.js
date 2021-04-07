const path = require('path')
const util = require('util')
const { GraphQLInt } = require('graphql')
const { GraphQLScalarType } = require('graphql')
const fs = require('fs')
const { buildMenuFromNodes } = require('./menu-builder')

const copyFile = util.promisify(fs.copyFile)

const buildTreeForPath = async (pagePath, getNodes, ignorePaths) =>
  buildMenuFromNodes(getNodes(), pagePath, ignorePaths)

exports.setFieldsOnGraphQLNodeType = async (
  { type, getNodes },
  _pluginOptions
) => {
  const pluginOptions = _pluginOptions
  if (!_pluginOptions.ignorePaths) {
    pluginOptions.ignorePaths = ['/404', '/dev-404-page']
  }

  if (type.name === 'SitePage') {
    return {
      menu: {
        type: new GraphQLScalarType({
          name: 'Menu',
          serialize(value) {
            return value
          },
        }),
        resolve: node =>
          buildTreeForPath(node.path, getNodes, pluginOptions.ignorePaths),
      },
      order: {
        type: GraphQLInt,
        result: node => {
          if (node.fields && node.fields.order) {
            return node.fields.order
          }
          return 0
        },
      },
    }
  }

  return {}
}

exports.onPreExtractQueries = async ({
  store,
  getNodes,
  boundActionCreators,
}) => {
  // Copy the helper fragment used to query the current page and it's menu items.
  const { program } = store.getState()
  await copyFile(
    path.join(__dirname, 'fragments.js'),
    `${program.directory}/.cache/fragments/page-tree.js`
  )
}
