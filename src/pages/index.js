import React, { Component } from 'react'

import Layout from '../components/layout/'
import Split from '../components/Split'
import Repositories from '../components/repositories'
import Starred from '../components/starred'
import Search from '../components/Search'

class IndexPage extends Component {

  state = {
    search: ""
  }

  update = value => {
    this.setState({ search: value })
  }

  

  render() {

    const { search } = this.state

    return (
      <Layout>
        <Split>
          <div>
            <Search update={this.update} />
            <Repositories search={search} />
          </div>
          <Starred search={search} />
        </Split>
      </Layout>
    )
  }
}

export default IndexPage
