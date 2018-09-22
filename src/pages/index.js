import React, { Component } from 'react'

import Layout from '../components/layout'
import Split from '../components/Split'
import Repositories from '../components/repositories'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Split>
          <Repositories />
          <Repositories />
        </Split>
      </Layout>
    )
  }
}

export default IndexPage
