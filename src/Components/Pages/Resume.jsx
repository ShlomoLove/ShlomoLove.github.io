import React from 'react';
import ResumeTopLeft from './ResumeTopLeft.jsx';
import ResumeBottomLeft from './ResumeBottomLeft.jsx';
import ResumeTopRight from './ResumeTopRight.jsx';
import ResumeBottomRight from './ResumeBottomRight.jsx';
import ResumeBottom from './ResumeBottom';

const Resume = props => {
  return (
    <div className='resumeContainer'>
      <div className='buttonContainer'>
        <button className='button'>
          <a href='https://nassauwebsite.s3-us-west-2.amazonaws.com/SNassau_SE_Resume.pdf'>
          PDF Version
          </a>
        </button>
      </div>

      <div className='resumePaper'>
        <div className='resumeTopHalfContainer'>
          <ResumeTopLeft/>
          <ResumeTopRight/>
        </div>
        <ResumeBottom/>
        {/* <ResumeBottomLeft/> */}
        {/* <ResumeBottomRight/> */}
      </div>
    </div>
  )
}

export default Resume;