import React from 'react';
import ouiqlnDemo from '../../../../OuiQlnDemo.gif';
import GitHubIcon from '@material-ui/icons/GitHub';

const OuiQln = () => {
  return (
    <div className='project'>
      <div className='projectContainer'>
        <div className='projectDetails'>
          <div className='projectTitle'>
            OuiQln
          </div>
          <div className='projectSubTitle'>
            Description
          </div>
            <div className='projectDescription'>
              OuiQln is a JavaScript product page cloning the Uniqlo web design and refactoring the jQuery legacy code utilizing the React library. It is a full-stack application with a client, server and MongoDB. This project is the work of a team of software developers using three different micro services combined with a proxy server.            </div>
            <div className='projectSubTitle'>
              Features
            </div>
              <li className='projectDescription'>Dropdown modules that utilize CSS for transition to create clear user experience. </li>
              <li className='projectDescription'>Carousels that transform for a more pleasant user interaction. </li>
              <li className='projectDescription'>A responsive search tool that reacts to every keystroke of the user for an intuitive search process. </li>
              <li className='projectDescription'>Smooth dropdown in the search function. </li>
              <li className='projectDescription'>Responsive star method based upon customer reviews. </li>
              <li className='projectDescription'>Calculates and displays customer review statistics. LO utilizing REACT and related JS technologies. </li>
              <li className='projectDescription'>Utilizes React, Express, Node.js, MongoDB, MySql, CSS Modules, Webpack, Babel, Jest. </li>
          <div className='projectSubTitle'>
            Technology
          </div>
            <div className='projectTechnologies'>
              JAVASCRIPT, REACT, CSS MODULES, AWS EC2, MONGODB, EXPRESS, AGILE, AWS EC2, NODE 
            </div>
            <div className='codeLink'>
            <a href='https://github.com/ShlomoLove/OuiQln-Product-Details'>view code<GitHubIcon className='githubIcon'></GitHubIcon></a>
          </div>
        </div>

        <div className='projectDemo'>
          <img src={ouiqlnDemo} className='demoGif'></img>
        </div>

      </div>
    </div>
  )
}

export default OuiQln;