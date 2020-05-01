import React from 'react';
import ZenSkateDemo from '../../../../zenskate2020.gif';
import githubIcon from '../../../../githubIcon.png';

const ZenSkate = () => {
  const onButtonClick = () => {
    window.location.href = 'http://www.zenskateco.com'
  }
  return (
    <div className='project'>
      <div className='projectContainer'>
        <div className='projectDetails'>
          <div className='projectTitle'>
            Zen Skate Co
          </div>
          <div className='projectSubTitle'>
            Description
          </div>
            <div className='projectDescription'>
            Zen Skate Co is a Full-Stack Application built with JavaScript and React to provide an interactive user database of Los Angeles Skate Parks. The is in the process of adding new features and functionality. 
            </div>
            <div className='projectSubTitle'>
              Features
            </div>
              <li className='projectDescription'>Full-Stack Application, built from the ground up</li>
              <li className='projectDescription'>Node.js/Express API incorporated with Reach-Router enables both Server and Client routing</li>
              <li className='projectDescription'>Incorporated Styled-Components with advanced use of props to dynamically style each component</li>
              <li className='projectDescription'>Integrated Mapbox functionality for customized UI markers to identify location of each park</li>
              <li className='projectDescription'>Customized React-Slick slider to provide user with ability to scroll and choose pictures</li>
              <li className='projectDescription'>Deployed application on AWS using Docker, NGINX and redirected DNS to elastic IP address</li>
          <div className='projectSubTitle'>
            Technology
          </div>
            <div className='projectTechnologies'>
              JAVASCRIPT, REACT, AWS EC2, NGINX, MONGODB, EXPRESS, MAPBOX, STYLED-COMPONENTS, DOCKER, REACH ROUTER 
            </div>
            <div className='projectButtonContainer'>
              <button className='projectButton' onClick={(()=> onButtonClick())}>VISIT SITE</button>
            </div>
            <div className='codeLink'>
            <a href='https://github.com/skate-prototype-web'>view code<img src={githubIcon} className='githubIcon'></img></a>
          </div>
        </div>
        <div className='projectDemo'>
          <img src={ZenSkateDemo} className='demoGif'></img>
        </div>

      </div>
    </div>
  )
}

export default ZenSkate;