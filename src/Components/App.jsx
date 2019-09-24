import React from 'react';
import Background from './Background';
import classNames from 'classnames';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Background/>
        <div className='headerContainer'>
          <div className='nassauTitle'>Scott P Nassau</div>
        </div>
      </div>
    )
  }
}

export default App; 