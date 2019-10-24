import React from 'react';
import abibasLogo from '../../../../abibas.jpg';
import githubIcon from '../../../../githubIcon.png';


const Abibas = props => {
  return (
    <div className='project'>
      <div className='projectContainer'>
        <div className='projectDetails'>
          <div className='projectTitle'>
            Abibas
          </div>
          <div className='projectSubTitle'>
            Description
          </div>
            <div className='projectDescription'>
            The Abibas System Design is a project that took the legacy code of an enterprise application and scaled the architecture to accomodate 10,000,000 products and high capacity query load. By comparing the efficiency of relational and non-relational databases the project restructured the architecture of both the server and database to optimize the query times and system reliability. The team of engineers compared the cost benefit analysis of horizontal and vertical scaling.            </div>
            <div className='projectSubTitle'>
              Features
            </div>
              <li className='projectDescription'>Optimized the system design of a database with 10,000,000 products by analyzing relational/non-relational database throughput and query times. </li>
              <li className='projectDescription'>Reduced the query latency by 20x to 3ms through horizontally scaling with multiple servers, load balancing, indexing and utilizing promises. </li>
              <li className='projectDescription'>Increased the throughput of API calls from 250rps to 3000rps with 0% error rate. </li>
              <li className='projectDescription'>Scaled server and database horizontally using load balancing with NginX to utilize 6 servers. </li>
          <div className='projectSubTitle'>
            Technology
          </div>
            <div className='projectTechnologies'>
              JAVASCRIPT, POSTGRESQL, MONGODB, NODE, EXPRESS, DOCKER, NGINX, REDIS, AWS, AMAZON LOAD BALANCER, LOADER.IO, WEBPACK, JEST, ARTILLERY, REACT 
            </div>
            <div className='codeLink'>
            <a href='https://github.com/ShlomoLove/Abibas-SDC-Details-Module'>view code<img src={githubIcon} className='githubIcon'></img></a>
          </div>
        </div>

        <div className='projectDemo'>
          <img src={abibasLogo} className='demoGif'></img>
        </div>

      </div>
    </div>
  )
}

export default Abibas;