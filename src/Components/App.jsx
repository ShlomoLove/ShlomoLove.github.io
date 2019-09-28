import React from 'react';
import Background from './Background';
import classNames from 'classnames';
import PersistentDrawerRight from './TopDrawer'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

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
            <div className='nassauTitle'>Hi, my name is Scott!</div>
            <div className='nassauTitle'>Thank you for visiting my page.</div>
            <div className='nassauTitle'>To find out more about me and navigate through this page click up here</div>
            <div className='nassauTitle'>&#10138;</div>

          </div>
        </div>
      </div>
    )
  }
}

export default App; 