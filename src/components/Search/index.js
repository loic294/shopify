import React, { Component } from 'react'
import s from './styles.module.scss'

class Search extends Component {

  state = {
    search: ""
  }

  change = e => {
    this.setState({ search: e.target.value })
  }

  update = e => {
    e.preventDefault()
    const { search } = this.state
    const { update } = this.props
    update(search)
  }

  render() {

    const { search } = this.state

    return <div className={s.search}>
      <form onSubmit={this.update}>
        <input type="rext" placeholder="Search Github" className={s.input} value={search} onChange={this.change} />
        <button type="submit">Search</button>
      </form>
    </div>
  }
}

export default Search
