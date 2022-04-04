/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Link} from 'react-router-dom'

function NotFoundScreen() {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div>
        Sorry... Nothing here. <Link to="/">Go home</Link>
      </div>
    </div>
  )
}