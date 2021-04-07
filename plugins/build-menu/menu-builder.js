/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
const treeify = require('treeify-paths')

const MenuItem = {
  order: 0,
  path: '',
  title: '',
  selected: false,
  active: false,
  isEmptyParent: false,
  children: [],
}

const normalizePath = p => {
  let newPath
  if (p.endsWith('/')) {
    newPath = p.substr(0, p.length - 1)
  }
  if (!p.startsWith('/')) {
    newPath = `/${p}`
  }
  return newPath
}

exports.buildMenuFromNodes = (nodes, selectedPath, ignorePaths = []) => {
  const pages = nodes.filter(x => x.internal.type === 'SitePage')

  const _ignorePaths = ignorePaths.map(normalizePath)
  const treePaths = pages
    .map(x => normalizePath(x.path))
    .filter(x => x !== '/')
    .filter(x => _ignorePaths.findIndex(ignorePath => ignorePath === x) === -1)
  const tree = treeify(treePaths)

  const rootNode = tree.children[0]

  const walkTreeNode = (node, parents) => {
    const normalizedPath = normalizePath(node.path)
    const menuItem = { ...MenuItem }
    menuItem.path = normalizedPath

    const page = pages.find(x => normalizePath(x.path) === normalizedPath)
    if (page) {
      menuItem.title = page.context.title
      if (page.fields && page.fields.order) {
        menuItem.order = page.fields.order
      } else {
        menuItem.order = 0
      }
    } else {
      menuItem.title = node.name
      menuItem.isEmptyParent = true
      menuItem.order = 0
    }

    let _parents = parents
    if (normalizedPath === normalizePath(selectedPath)) {
      menuItem.selected = true
      _parents = parents.map(parent => ({ ...parent, active: true }))
    }

    if (node.children && node.children.length > 0) {
      const newParents = [..._parents, menuItem]
      menuItem.children = node.children.map(child =>
        walkTreeNode(child, newParents)
      )
    }
    return menuItem
  }

  const result = rootNode.children.map(child => walkTreeNode(child, []))

  const sortChildren = items => {
    for (const item of items) {
      item.children = sortChildren(item.children)
    }
    return items.sort((a, b) => a.order - b.order)
  }

  const sortedResult = result.sort((a, b) => a.order - b.order)
  for (const item of sortedResult) {
    item.children = sortChildren(item.children)
  }

  // Now that we built the entire tree, let's remove the nodes that don't matter.
  const collapseChildren = item => {
    const _item = item
    // We only want to consider collapsing children if this current node can be selected.
    // If it isn't a valid page, then the user can't navigate to it to see it's children.
    if (!item.isEmptyParent) {
      // Collapse children if this node isn't in the active selected path.
      if (!item.active && !item.selected) {
        _item.children = []
      }
    }
    for (const child of _item.children) {
      collapseChildren(child)
    }
  }

  for (const child of result) {
    collapseChildren(child)
  }

  return result
}
