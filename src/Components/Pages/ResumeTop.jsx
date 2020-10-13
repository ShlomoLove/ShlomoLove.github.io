import React from 'react';
import logo from '../../../SPNassauLogo.png'
import phoneIcon from '../../../phoneIcon.png'
import emailIcon from '../../../emailIcon.png'
import githubIcon from '../../../githubIcon.png'
import linkedinIcon from '../../../linkedinIcon.png'
import websiteIcon from '../../../websiteIcon.png'

const ResumeTop = () => {
  return (
    <div className='resumeTopContainer'>

      <div className='logoContainer'>
        <img src={logo} className='resumeLogo'></img>
      </div>

      <div className='resumeTitleContainer'>
        <div className='resumeTitle'>
          SCOTT P NASSAU
        </div>
        <div className='positionTitles'>
          FULL-STACK SOFTWARE ENGINEER
          <br/>
          CERTIFIED SCRUM MASTER
          <br/>
          PROJECT MANAGER
        </div>
      </div>

      <div className='resumeContactDetailsContainer'>
        <div className='resumeContactMethod'>
          <a href='tel:310-993-7231'>310-993-7231 </a> <img src={phoneIcon} className='resumeIcons'></img>
        </div>
        <div className='resumeContactMethod'>
          <a href='mailto:snassau@gmail.com'>snassau@gmail.com </a> <img src={emailIcon} className='resumeIcons'></img>
        </div>
        <div className='resumeContactMethod'>
          <a href='https://github.com/ShlomoLove'>github.com/ShlomoLove</a> <img src={githubIcon} className='resumeIcons'></img>
        </div>
        <div className='resumeContactMethod'>
          <a href='https://www.linkedin.com/in/scottnassau/'>linkedin.com/in/scottnassau </a> <img src={linkedinIcon} className='resumeIcons'></img>
        </div>
        <div className='resumeContactMethod'>
          <a href='https://shlomolove.github.io/'>shlomolove.github.io </a> <img src={websiteIcon} className='resumeIcons'></img>
        </div>
      </div>                                     
    </div>
  )
}

export default ResumeTop;