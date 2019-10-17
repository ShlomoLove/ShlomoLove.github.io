import React from 'react';
import phoneIcon from '../../../PhoneIcon.png'
import emailIcon from '../../../EmailIcon.png'
import addressIcon from '../../../AddressIcon.png'
import githubIcon from '../../../githubIcon.png'
import linkedinIcon from '../../../linkedinIcon.png'


const ResumeMain= props => {
  return (
    <div className='resumeMainContainer'>
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
        <div classNam e='resumeContactDetails'>
          <div className='resumeContactDigits'>
            310-993-7231
            <br/>
            snassau@gmail.com
            <br/>
            Los Angeles, CA
            <br/>
            github.com/ShlomoLove
            <br/>
            linkedin.com/in/scottnassau
          </div>
          <div className='resumeContactIcons'>
            <img src={phoneIcon} className='resumeIcons'></img>
            <br/>
            <img src={emailIcon} className='resumeIcons'></img>
            <br/>
            <img src={addressIcon} className='resumeIcons'></img>
            <br/>
            <img src={githubIcon} className='resumeIcons'></img>
            <br/>
            <img src={linkedinIcon} className='resumeIcons'></img>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ResumeMain; 