const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

// const createTagPages = (createPage, posts) => {
//   const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js')
//   const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.js')

//   const postsByTag = {}

//   posts.forEach(({ node }) => {
//     if (node.frontmatter.tags) {
//       node.frontmatter.tags.forEach(tag => {
//         if (!postsByTag[tag]) {
//           postsByTag[tag] = []
//         }
//         postsByTag[tag].push({ node })
//       })
//     }
//   })

//   const tags = Object.keys(postsByTag)

//   createPage({
//     path: '/tags',
//     component: allTagsIndexTemplate,
//     context: {
//       tags: tags.sort(),
//     },
//   })

//   tags.forEach(tagName => {
//     const _posts = postsByTag[tagName]

//     createPage({
//       path: `/tags/${tagName}`,
//       component: singleTagIndexTemplate,
//       context: {
//         posts: _posts,
//         tagName,
//       },
//     })
//   })
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                tags
                menus
                menuTitle
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges

      // createTagPages(createPage, posts)

      posts.forEach(({ node }) => {
        if (!node.frontmatter.title) {
          throw new Error(`No title for ${node.fields.slug}`)
        }
        if (!node.frontmatter.tags || !node.frontmatter.tags.length) {
          throw new Error(`No title for ${node.fields.slug}`)
        }
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/playbook.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
