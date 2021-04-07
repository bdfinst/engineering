const pageTreeFragment = graphql`
  fragment pageTree on RootQueryType {
    currentPage: allSitePage(filter: { path: { eq: $slug } }) {
      edges {
        node {
          menu
          path
        }
      }
    }
  }
`

exports = {
  pageTreeFragment,
}
