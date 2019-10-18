import React from 'react';
import phoneIcon from '../../../PhoneIcon.png'
import emailIcon from '../../../EmailIcon.png'
import addressIcon from '../../../AddressIcon.png'
import githubIcon from '../../../githubIcon.png'
import linkedinIcon from '../../../linkedinIcon.png'


const ResumeTopRight = props => {
  return (
    <div className='resumeTopContainer'>
      <div className='resumeTitleContainer'>
        <div className='resumeTitle'>
        Scott P Nassau
        </div>
        <div className='positionTitles'>
          Project Manager
          <br/>
          Certified Scrum Master
          <br/>
          Full-Stack Software Engineer
        </div>
      </div>
      <div className='resumeContactDetails'>
        <div className='resumeContactDigits'>
          310-993-7231 <img src={phoneIcon} className='resumeIcons'></img>
          <br />
          snassau@gmail.com <img src={emailIcon} className='resumeIcons'></img>
          <br/>
          Los Angeles, CA <img src={addressIcon} className='resumeIcons'></img>
          <br/>
          github.com/ShlomoLove <img src={githubIcon} className='resumeIcons'></img>
          <br/>
          linkedin.com/in/scottnassauimg <img src={linkedinIcon} className='resumeIcons'></img>
        </div>
      </div>
    </div>
  )
}

export default ResumeTopRight; 