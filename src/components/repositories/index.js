/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import { Query, Mutation } from 'react-apollo/lib/react-apollo.umd'
import client from '../../queries/index'
import s from './styles.module.scss'

import { GET_DIRECTORIES } from '../../queries/search'
import { GET_STARRED } from '../../queries/starred'
import { ADD_STAR } from '../../queries/stars'

const Repositories = ({ search }) => {
    return (
        <div className={s.tab}>
        <Mutation
            client={client}
            mutation={ADD_STAR}
            refetchQueries={[{
                query: GET_STARRED
            }]}
            >
            {addStar => (
                <Query client={client} variables={{ search }} query={GET_DIRECTORIES}>
                    {({ loading, error, data }) => {
                        if (error) return <p>{error.message}</p>;
            
                        if (!data || !data.search || !data.search.nodes) {
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
                                {data.search.nodes.map(({ id, nameWithOwner, primaryLanguage, releases, viewerHasStarred }, key) => (
                                    <tr key={key}>
                                        <td>{nameWithOwner}</td>
                                        <td>{primaryLanguage && primaryLanguage.name}</td>
                                        <td>{releases.nodes && releases.nodes[0] && releases.nodes[0].tag ? releases.nodes[0].tag.name : '-'}</td>
                                        <td>
                                            <a href="#" onClick={() => {
                                                console.log('ID', id)
                                                addStar({ variables: { input: { starrableId: id }}})
                                            }}>{viewerHasStarred ? null : 'Add'}</a>
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
