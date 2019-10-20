import React from 'react';
import Abbibas from './Projects/Abbibas';
import HPDance from './Projects/HPDance';
import OuiQln from './Projects/OuiQln';
import Schedulit from './Projects/Schedulit';
import TicTacToe from './Projects/TicTacToe';

const Apps = props => {
  return (
    <div className='appsContainer'>
      <div className='appsTitle'>Some recent projects</div>
      <div className='appsFlex'>
        <Schedulit/>
        <OuiQln/>
        <Abbibas/>
        <HPDance/>
        <TicTacToe/>
      </div>
    </div>
  )
}

export default Apps;