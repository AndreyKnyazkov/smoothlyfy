import { css } from '@emotion/css'
import {SearchBox, MenuDot} from 'components/lib'

function Search(...children) {


  return (
    <>
      <SearchBox>
        <input type="text" placeholder="Search..." />
      </SearchBox>
    </>
  )
}

export {Search}