/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import { Query, Mutation } from 'react-apollo/lib/react-apollo.umd'
import client from '../../queries/index'
import s from './styles.module.scss'

import { GET_STARRED } from '../../queries/starred'
import { GET_DIRECTORIES } from '../../queries/search'
import { REMOVE_STAR } from '../../queries/stars'

const Repositories = ({ search }) => {
    return (
        <div className={s.tab}>
            <Mutation
            client={client}
            mutation={REMOVE_STAR}
            refetchQueries={[{
                query: GET_STARRED
            },{
                query: GET_DIRECTORIES,
                variables: { search }
            }]}
            >
            {removeStar => (
            <Query client={client} query={GET_STARRED}>
                {({ loading, error, data }) => {
                    if (error) return <p>{error.message}</p>;

                    console.log('DATA', data)
        
                    if (!data || !data.user || !data.user.starredRepositories || !data.user.starredRepositories.nodes) {
                        return null
                    }
        
                    return <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Language</th>
                                <th>Latest tag</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.user.starredRepositories.nodes.map(({ id, nameWithOwner, primaryLanguage, releases, viewerHasStarred }, key) => (
                                <tr key={key}>
                                    <td>{nameWithOwner}</td>
                                    <td>{primaryLanguage && primaryLanguage.name}</td>
                                    <td>{releases.nodes && releases.nodes[0] && releases.nodes[0].tag ? releases.nodes[0].tag.name : '-'}</td>
                                    <td>
                                        <a href="#" onClick={() => {
                                            removeStar({ variables: { input: { starrableId: id }}})
                                        }}>Remove</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }}
            </Query>
            )}
            </Mutation>
        </div>
        
    )
}

export default Repositories
