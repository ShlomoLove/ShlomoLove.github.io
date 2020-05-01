import React from 'react';
import Abibas from './Projects/Abibas';
import HPDance from './Projects/HPDance';
import OuiQln from './Projects/OuiQln';
import Schedulit from './Projects/Schedulit';
import TicTacToe from './Projects/TicTacToe';
import ZenSkate from './Projects/ZenSkate';

const Apps = props => {
  let {drawerClick} = props;
  return (
    <div className='appsContainer'>
      <div className='appsTitle'>some recent projects</div>
      <div className='appsFlex'>
        <ZenSkate/>
        <Schedulit/>
        <OuiQln/>
        <Abibas/>
        <HPDance/>
        <TicTacToe drawerClick={drawerClick} />
      </div>
    </div>
  )
}

export default Apps;