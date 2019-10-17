import React from 'react';
import logo from '../../../SPNassauLogo.png'

const ResumeSide = props => {
  return (
    <div className='sidePanel'>
      <div className='logoContainer'>
        <img src={logo} className='resumeLogo'></img>
      </div>
      <div className='skillsContainer'>
        <hr/>
        <div className='sideTitle'>
          POWER SKILLS
        </div>
        <hr/>
        <div className='skillsList'>
          <div className='skill'>
            &#8227; Scrum Certification - 'CSM'
          </div>
          <div className='skill'>
            &#8227; Agile Leadership
          </div>
          <div className='skill'>
            &#8227; Communication
          </div>
          <div className='skill'>
            &#8227; Problem-Solving
          </div>
          <div className='skill'>
            &#8227; Strategic Planning
          </div>
          <div className='skill'>
            &#8227; Team Building / Collaboration
          </div>
          <div className='skill'>
            &#8227; Conflict Resolution
          </div>
        </div>
      </div>

      <div className='skillsContainer'>
        <hr/>
        <div className='sideTitle'>
          TECHNICAL SKILLS 
        </div>
        <hr/>
          <div className='skillTitle'>
            DEVELOPER TOOLS
          </div>
          <div className='skillsList'>
            <div className='skill'>
              &#8227; JIRA / Trello
            </div>
            <div className='skill'>
              &#8227; DevOps
            </div>
            <div className='skill'>
              &#8227; npm / yarn / git
            </div>
            <div className='skill'>
              &#8227; Webpack / Babel
            </div>
            <div className='skill'>
              &#8227; Agile Methodologies
            </div>
            <div className='skill'>
              &#8227; Docker
            </div>
          </div>
          <div className='skillTitle'>
            LANGUAGES
          </div>
          <div className='skillsList'>
            <div className='skill'>
              &#8227; JavaScript (ES5 and ES6)
            </div>
            <div className='skill'>
              &#8227; TypeScript
            </div>
            <div className='skill'>
              &#8227; Ruby
            </div>
            <div className='skill'>
              &#8227; PHP
            </div>
            <div className='skill'>
              &#8227; HTML5
            </div>
            <div className='skill'>
              &#8227; CSS3
            </div>
          </div>
          <div className='skillTitle'>
            FRONT END TOOLS
          </div>
          <div className ='skillsList'>
            <div className='skill'>
              &#8227; React / Redux
            </div>
            <div className='skill'>
              &#8227; React Native
            </div>
            <div className='skill'>
              &#8227; Angular
            </div>
            <div className='skill'>
              &#8227; Bootstrap
            </div>
            <div className='skill'>
              &#8227; jQuery
            </div>
          </div>
          <div className='skillTitle'>
            BACK END TOOLS
          </div>
          <div className='skillsList'>
            <div className='skill'>
              &#8227; Node.js
            </div>
            <div className='skill'>
              &#8227; Express
            </div>
            <div className='skill'>
              &#8227; MySql / PostgreSQL
            </div>
            <div className='skill'>
              &#8227; MongoDB / Mongoose
            </div>
            <div className='skill'>
              &#8227; NginX
            </div>
            <div className='skill'>
              &#8227; RESTful API Development
            </div>
            <div className='skill'>
              &#8227; GraphQL
            </div>
          </div>
          <div className='skillTitle'>
            TESTING / DEPLOYMENT
          </div>
          <div className='skillsList'>
            <div className='skill'>
              &#8227; AWS / EC2
            </div>
            <div className='skill'>
              &#8227; Test Driven Development
            </div>
            <div className='skill'>
              &#8227; Jest
            </div>
            <div className='skill'>
              &#8227; Mocha / Chai
            </div>
            <div className='skill'>
              &#8227; Loader.io
            </div>
          </div>
      </div>
    </div>
  )
}

export default ResumeSide; 