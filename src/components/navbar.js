import React from 'react'
import { css } from '@emotion/css'
import { Menu, MenuItem, NavBar, NavName, NavPfp, MenuDot } from 'components/lib'
import {Home, Note, Playlists} from 'components/icons'
import {useLocalStorageState} from 'components/utils'
import {Routes, Route, Link} from 'react-router-dom';
// images 
import pfp from 'assets/img/navbar/pfp.png'

function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={''}></Route>
    </Routes>
  )
}

const menu = [
  {
    name: 'Home',
    icon: <Home />
  },
  { 
    name: 'Browse Music',
    icon: <Note />
  },
  {
    name: 'Playlists',
    icon: <Playlists />
  }
]


function Navbar() {
  // set active item for menu item
  // const [activeItem, setActiveItem] = useLocalStorageState('activeItem', 0)
  const [activeMenuItem, setActiveMenuItem] = React.useState('Home')

  return (
      <NavBar>
        {/* pfp and name */}
        <div className={css`
          display: flex;
          align-items: center;
        `}>
          <NavPfp src={pfp} />
          <NavName>Alice</NavName>
        </div>
        {/* menu */}
        <Menu>
          {menu.map(({name, icon}, index) => 
            <MenuDot 
              to="/fdf"
              key={index} 
              onClick={() => setActiveMenuItem(name)}
              variant={activeMenuItem === name ? 'active' : 'default'} 
              >
              {icon}
              <MenuItem>{name}</MenuItem>
            </MenuDot>
          )}

        </Menu>
      </NavBar>
  )
}

export {Navbar}