import React from 'react';
import ResumeSide from './ResumeSide.jsx';
import ResumeMain from './ResumeMain.jsx'

const Resume = props => {
  return (
    <div className='resumeContainer'>
      <div className='resumePaper'>
        <ResumeSide/>
        <ResumeMain/>
      </div>
    </div>
  )
}

export default Resume;