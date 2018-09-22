import gql from 'graphql-tag'

export const GET_STARRED = gql`
{
  user(login: "loic294") {
    starredRepositories(first: 100) {
      nodes {
        __typename
        id
        nameWithOwner
        primaryLanguage {
          name
        }
        viewerHasStarred
        releases(last: 1) {
          nodes {
            tag {
              name
            }
          }
        }
      }
    }
  }
}
`;
