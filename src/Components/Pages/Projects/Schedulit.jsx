import React from 'react';
import schedulitDemo from '../../../../schedulit-demo.gif';
import githubIcon from '../../../../githubIcon.png';

const Schedulit = props => {
  return (
    <div className='project'>
      <div className='projectContainer'>
        <div className='projectDetails'>
          <div className='projectTitle'>
            Schedulit
          </div>
          <div className='projectSubTitle'>
            Description
          </div>
            <div className='projectDescription'>
            Schedulit is a single page Javascript web application built with React/Express/Mongo. Schedulit employs a simple and intuitive UI which allows the user to create and manage events all from one place.
            </div>
            <div className='projectSubTitle'>
              Features
            </div>
              <li className='projectDescription'>Uses Google OAuth2 for login/signup </li>
              <li className='projectDescription'>Convenient dashboard for viewing all events </li>
              <li className='projectDescription'>Events are created with a shareable link </li>
              <li className='projectDescription'>Calendar component makes it easy to select multiple dates with differing hours </li>
              <li className='projectDescription'>Draggable time selection </li>
              <li className='projectDescription'>Clear visualization of shared availabilities </li>
              <li className='projectDescription'>Real-time updates </li>
          <div className='projectSubTitle'>
            Technology
          </div>
            <div className='projectTechnologies'>
              JAVASCRIPT, REACT, OAUTH2, SOCKET.IO, MONGODB, EXPRESS, AGILE, AWS EC2, Docker 
            </div>
            <div className='codeLink'>
            <a href='https://github.com/ShlomoLove/Abibas-SDC-Details-Module'>view code<img src={githubIcon} className='githubIcon'></img></a>
          </div>
        </div>

        <div className='projectDemo'>
          <img src={schedulitDemo} className='demoGif'></img>
        </div>

      </div>
    </div>
  )
}

export default Schedulit;