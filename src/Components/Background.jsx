import React from 'react';
import classnames from 'classnames';
import Logo from './Logo';


const Background = props => {

  return (
    <div>
      <div className={classnames('ripple-background')}></div>
      <Logo/>
      <div className={classnames('circle', 'xxlarge', 'shade1')}></div>
      <div className={classnames('circle', 'xlarge', 'shade2')}></div>
      <div className={classnames('circle', 'large', 'shade3')}></div>
      <div className={classnames('circle', 'medium', 'shade4')}></div>
      <div className={classnames('circle', 'small', 'shade5')}></div>
    </div>
  )
};

export default Background