/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import s from './styles.module.scss'

import telescope from '../../images/telescope.png'
import bottle from '../../images/bottle.png'

const Table = ({ nodes, action, condition, image, emptyTitle, emptySubtitle }) => {

  if (!nodes || !nodes.length) {

    const imgList = {
      telescope,
      bottle
    }

    return <div className={s.notFound}>
      <div>
        <img src={imgList[image]} alt="Content not found illustration" />

        <h3>{emptyTitle}</h3>
        <p>{emptySubtitle}</p>
      </div>
    </div>
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
        {nodes.map(({ id, nameWithOwner, primaryLanguage, releases, viewerHasStarred }, key) => (
            <tr key={key}>
                <td>{nameWithOwner}</td>
                <td>{primaryLanguage && primaryLanguage.name}</td>
                <td>{releases.nodes && releases.nodes[0] && releases.nodes[0].tag ? releases.nodes[0].tag.name : '-'}</td>
                <td>
                    <a href="#" onClick={() => action(id)}>{condition(viewerHasStarred)}</a>
                </td>
            </tr>
        ))}
    </tbody>
  </table>
}

export default Table
