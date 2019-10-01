import React from 'react';
import Background from './Background';
import classnames from 'classnames';
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
          <PersistentDrawerRight className='drawerContainer'/>
        </div>
        <div className='instructionsContainer'>
          <div className='arrowContainer'>
            <div className={classnames('arrowSlider')}>
              <div className='arrow'></div>
            </div>
            <div className={classnames('arrowSlider', 'delay1')}>
              <div className='arrow'></div>
            </div>
            <div className={classnames('arrowSlider', 'delay2')}>
              <div className='arrow'></div>
            </div>
            <div className={classnames('arrowSlider', 'delay3')}>
              <div className='arrow'></div>
            </div>
          </div>
          {/* <div className='instructions'>&#10138;</div> */}
          <div className='instructions'>To find out more about me, click here:</div>
        </div>
        <div className='mainApp'>
          <Background/>
          <div className='headerContainer'>
            <span className='frontCopy1'>Hi, my name is Scott!</span>
            <span className='frontCopy2'>Thank you for visiting my page.</span>
            <span className='frontCopy3'>I lead teams</span>
            <span className='frontCopy3'>&</span>
            <span className='frontCopy3'>build websites</span>
          </div>
        </div>
      </div>
    )
  }
}

export default App; 