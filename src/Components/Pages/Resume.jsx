import React from 'react';
import ResumeTop from './ResumeTop.jsx';
import ResumeBottom from './ResumeBottom.jsx';

const Resume = () => {
  return (
    <div className='resumeContainer'>
      <div className='buttonContainer'>
        <button className='button'>
          <a href='https://nassauwebsite.s3-us-west-2.amazonaws.com/Nassau_Resume.pdf'>
          PDF Version
          </a>
        </button>
      </div>

      <div className='resumePaper'>
          <ResumeTop/>
          <ResumeBottom/>
      </div>
    </div>
  )
}

export default Resume;