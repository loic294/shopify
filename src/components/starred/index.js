/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import { Query, Mutation } from 'react-apollo/lib/react-apollo.umd'
import client from '../../queries/index'
import s from './styles.module.scss'

import { GET_STARRED } from '../../queries/starred'
import { GET_DIRECTORIES } from '../../queries/search'
import { REMOVE_STAR } from '../../queries/stars'

import Table from '../Table/'

const Starred = ({ search }) => {
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

                            return <Table
                                nodes={data && data.user && data.user.starredRepositories && data.user.starredRepositories.nodes}
                                action={id => {
                                    removeStar({ variables: { input: { starrableId: id }}})
                                }}
                                condition={value => { return value ? 'Remove' : '' }}
                                image={'bottle'}
                                emptyTitle="Hum? It seems empty here..."
                                emptySubtitle="Add stars to fill me up!"
                            />
                        }}
                    </Query>
                )}
            </Mutation>
        </div>
        
    )
}

export default Starred
