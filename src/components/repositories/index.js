import React from 'react'
import { Query } from 'react-apollo/lib/react-apollo.umd'
import client from '../../queries/index'
import s from './styles.module.scss'

import { GET_DIRECTORIES } from '../../queries/search'

const Repositories = () => {
    return (
        <div className={s.tab}>
            <Query client={client} query={GET_DIRECTORIES}>
                {({ loading, error, data }) => {
                    if (error) return <p>{error.message}</p>;
        
                    if (!data || !data.search || !data.search.nodes || loading) {
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
                            {data.search.nodes.map(({ nameWithOwner, primaryLanguage, releases, viewerHasStarred }, key) => (
                                <tr key={key}>
                                    <td>{nameWithOwner}</td>
                                    <td>{primaryLanguage.name}</td>
                                    <td>{releases.nodes && releases.nodes[0] ? releases.nodes[0].tag.name : '-'}</td>
                                    <td>{viewerHasStarred ? '' : 'Add'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }}
            </Query>
        </div>
        
    )
}

export default Repositories
