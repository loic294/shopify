import gql from 'graphql-tag'

export const GET_DIRECTORIES = gql`
{
    search(query: "shopify", type: REPOSITORY, first: 10) {
        nodes {
        ... on Repository {
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
