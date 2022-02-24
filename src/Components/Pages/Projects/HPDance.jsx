import React from 'react';
import HPDemo from '../../../../HPDanceParty-Demo.gif';
import GitHubIcon from '@material-ui/icons/GitHub';

const HPDance = props => {
  return (
    <div className='project'>
      <div className='projectContainer'>
        <div className='projectDetails'>
          <div className='projectTitle'>
            Harry Potter Dance Party
          </div>
          <div className='projectSubTitle'>
            Description
          </div>
            <div className='projectDescription'>
            This is a fun toy project I worked on to show the inheritance of classes by recreating an imaginary fight between good and evil. The animation utilizes JQuery.            </div>
            <div className='projectSubTitle'>
              Features
            </div>
              <li className='projectDescription'>Shows class inheritance. </li>
              <li className='projectDescription'>Each button introduces a different character, instatiated from a parent class. </li>
              <li className='projectDescription'>Additional button initiates an imaginary battle between good and evil. </li>
              <li className='projectDescription'>Each character has a different response with click on character. </li>
          <div className='projectSubTitle'>
            Technology
          </div>
            <div className='projectTechnologies'>
              JAVASCRIPT, JQUERY, JAVASCRIPT CLASSES
            </div>
            <div className='codeLink'>
            <a href='https://github.com/ShlomoLove/HarryPotterDanceParty'>view code<GitHubIcon className='githubIcon'></GitHubIcon></a>
          </div>
        </div>

        <div className='projectDemo'>
          <img src={HPDemo} className='demoGif'></img>
        </div>

      </div>
    </div>
  )
}

export default HPDance;