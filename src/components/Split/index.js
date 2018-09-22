import React from 'react'
import { Link } from 'gatsby'
import s from './styles.module.scss'

const Split = ({ children }) => (
  <div className={s.split}>
    {children}
  </div>
)

export default Split
