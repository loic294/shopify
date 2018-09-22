import React from 'react'
import { Link } from 'gatsby'
import s from './styles.module.scss'

const Header = ({ siteTitle }) => (
  <header className={s.header}>
    <div>
      <h1 className={s.title}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
