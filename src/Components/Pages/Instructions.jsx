import React from 'react';
import classnames from 'classnames';

const Instructions = props => {
  return (
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
        <div className='instructions'>To find out more, click here:</div>
      </div>
    </div>
  )
}

export default Instructions;