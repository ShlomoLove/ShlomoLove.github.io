import React from 'react';
import Background from './Background';
import classNames from 'classnames';
import PersistentDrawerRight from './TopDrawer'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      home: true,
      about: false,
      articles: false,
      apps: false,
      resume: false,
    }
  }
  render () {
    return (
      <div>
        <div className='drawerContainer'>
          <PersistentDrawerRight/>
        </div>
        <div className='mainApp'>
          <Background/>
          <div className='headerContainer'>
            <span className='nassauTitle'>Hi, my name is Scott!</span>
            <span className='nassauTitle'>Thank you for visiting my page.</span>
            <span className='nassauTitle'>I am a software engineer, project manager and Scrum Master</span>
            <span className='nassauTitle'>To find out more about me and navigate through this page click up here</span>
            <div className='nassauTitle'>&#10138;</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App; 