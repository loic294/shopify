import React from 'react'
import { Query, Mutation } from 'react-apollo/lib/react-apollo.umd'
import client from '../../queries/index'
import s from './styles.module.scss'

import { GET_DIRECTORIES } from '../../queries/search'
import { GET_STARRED } from '../../queries/starred'
import { ADD_STAR } from '../../queries/stars'

import Table from '../Table/'
import { addTaost } from '../Toast/'

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
            
                        return <Table
                            nodes={data && data.search && data.search.nodes}
                            action={(id, name) => {
                                addTaost(`${name} added to favorites!`)
                                addStar({ variables: { input: { starrableId: id }}})
                            }}
                            condition={value => value ? null : 'Add'}
                            image={'telescope'}
                            emptyTitle="Try searching for something on Github."
                            emptySubtitle="Maybe the stars will align!"
                        />
                    }}
                </Query>
            )}
            </Mutation>
        </div>
        
    )
}

export default Repositories
