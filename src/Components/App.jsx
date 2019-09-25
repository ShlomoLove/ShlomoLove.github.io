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
            <div className='nassauTitle'>Scott P Nassau</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App; 