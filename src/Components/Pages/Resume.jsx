import React from 'react';
import ResumeTopLeft from './ResumeTopLeft.jsx';
import ResumeBottomLeft from './ResumeBottomLeft.jsx';
import ResumeTopRight from './ResumeTopRight.jsx';
import ResumeBottomRight from './ResumeBottomRight.jsx';

const Resume = props => {
  return (
    <div className='resumeContainer'>
      <div className='buttonContainer'>
        <button className='button'>
          <a href='https://nassauwebsite.s3-us-west-2.amazonaws.com/SNassau+PM+Resume.pdf'>
          PDF Version
          </a>
        </button>
      </div>

      <div className='resumePaper'>
        <ResumeTopLeft/>
        <ResumeTopRight/>
        <ResumeBottomLeft/>
        <ResumeBottomRight/>
      </div>
    </div>
  )
}

export default Resume;