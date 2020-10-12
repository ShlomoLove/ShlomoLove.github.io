import React from 'react'
import PersistentDrawerRight from './TopDrawer';

const DrawerContainer = (props) => {
  const { drawerClick } = props

  return (
    <div className='drawerContainer'>
      <PersistentDrawerRight className='drawerContainer' drawerClick={drawerClick} />
    </div>
  )
}

export default DrawerContainer