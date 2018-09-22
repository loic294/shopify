import React, { Component } from 'react'
import s from './styles.module.scss'

class Search extends Component {

  state = {
    search: ""
  }

  change = e => {
    this.setState({ search: e.target.value })
  }

  update = _ => {
    const { search } = this.state
    const { update } = this.props
    console.log('UPDATE', search)
    update(search)
  }

  render() {

    const { search } = this.state
    const { update } = this.props

    return <div className={s.search}>
      <input type="rext" className={s.input} value={search} onChange={this.change} />

      <button onClick={this.update}>Search</button>
    </div>
  }
}

export default Search
