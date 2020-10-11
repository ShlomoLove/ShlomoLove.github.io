import React from 'react';
import logo from '../../../SPNassauLogo.png'
import phoneIcon from '../../../PhoneIcon.png'
import emailIcon from '../../../EmailIcon.png'
import githubIcon from '../../../githubIcon.png'
import linkedinIcon from '../../../linkedinIcon.png'

const ResumeTop = () => {
  return (
    <div className='resumeTopContainer'>

      <div className='logoContainer'>
        <img src={logo} className='resumeLogo'></img>
      </div>

      <div className='resumeTitleContainer'>
        <div className='resumeTitle'>
          Scott P Nassau
        </div>
        <div className='positionTitles'>
          FULL-STACK SOFTWARE ENGINEER
          <br/>
          CERTIFIED SCRUM MASTER
          <br/>
          PROJECT MANAGER
        </div>
      </div>

      <div className='resumeContactDetails'>
        <div className='resumeContactDigits'>
          <a href='tel:310-993-7231'>310-993-7231 <img src={phoneIcon} className='resumeIcons'></img></a>
          <br />
          <a href='mailto:snassau@gmail.com'>snassau@gmail.com <img src={emailIcon} className='resumeIcons'></img></a>
          <br/>
          <a href='https://github.com/ShlomoLove'>github.com/ShlomoLove <img src={githubIcon} className='resumeIcons'></img></a>
          <br/>
          <a href='https://www.linkedin.com/in/scottnassau/'>linkedin.com/in/scottnassau <img src={linkedinIcon} className='resumeIcons'></img></a>
        </div>
      </div>
                                          
    </div>
  )
}

export default ResumeTop;