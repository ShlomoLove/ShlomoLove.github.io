import React from 'react';
import ResumeTopLeft from './ResumeTopLeft.jsx';
import ResumeBottomLeft from './ResumeBottomLeft.jsx';
import ResumeTopRight from './ResumeTopRight.jsx';
import ResumeBottomRight from './ResumeBottomRight.jsx';


const Resume = props => {
  return (
    <div className='resumeContainer'>
      <div className='resumePaper'>
        <div className='sidePanel'>
          <ResumeTopLeft/>
          <ResumeBottomLeft/>
        </div>
        <div className='resumeMainContainer'>
          <ResumeTopRight/>
          <ResumeBottomRight/>
        </div>
      </div>
    </div>
  )
}

export default Resume;