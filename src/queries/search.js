import gql from 'graphql-tag'

export const GET_DIRECTORIES = gql`
query Search($search: String!) {
    search(query: $search, type: REPOSITORY, first: 10) {
        nodes {
        __typename
        ... on Repository {
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
