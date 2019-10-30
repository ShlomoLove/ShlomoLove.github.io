import React from 'react';
import Scott from '../../../Scott.jpg'

const About = props => {
  return (
    <div className='aboutContainer'>
      <div className='aboutTitle'>
        My Short(ish) Story
      </div>
      <div className='textContainer'>
        <img src={Scott} className='scott'></img>
        <div className='aboutText'>
        For many years running a marathon was on my bucket list, but simply thinking about it wasn’t going to make it happen. It required action. I arduously trained for the Los Angeles Marathon and set a modest goal of finishing in 4 hours. Not only did I shatter my goal by 30 minutes, but I caught the the running bug. The following year, I decided to push my limits further and run 65 kilometers (40 miles). Yet around mile 34, I hit the wall. My body ached and my limbs felt fatigued, but tenaciously I put one foot in front of the other and continued to run. Running has become a metaphor for my life. <b>Every setback is an opportunity to grow and move forward.</b>
        </div>
        <div className='aboutText'>
        With over a decade of leadership experience, my journey has given me both perspective and breadth. I have worked as a <b>project manager</b> for over seven years and am a <b>full-stack software engineer</b>. My circuitous path, which included studying linguistics and ancient Near Eastern languages in a Ph.D. program, began when I was leading teams of high school students on both international and domestic educational trips designed to expand their cultural awareness. I then worked as an editor for a newsletter with a reach of 100,000 readers, and, as a published author, I have written several technical publications about how history and evolving language impact the changing cultural landscape. Simultaneously, I initiated an email marketing campaign that raised approximately $750,000. As an adept communicator, I have traveled across the United States, to speak before audiences as large as 2,000 to talk about ways they can expand their cultural diversity. 
        </div>
        <div className='aboutText'>
        I took the next step in my entrepreneurial endeavors when I launched a non-profit startup focused on building a safe-environment to promote holistic growth, human connection and the welfare of our neighborhood. I recruited a team to join me in the endeavor and, as the lead project manager, I managed every aspect of the organization from tangible aspects of budget, technology, advertising, facilities and logistics to the intangible elements of mission, vision and values. In this position, I worked as a <b>servant-leader</b> and implemented the use of <b>Scrum</b> within the organization. I encouraged <b>self-organizing teams</b> and championed <b>Agile systems</b>. I was responsible for <b>leading several cross functional teams</b> in production, design, advertising and development, by translating ambiguous requirements into specific, actionable tasks and a strategic plan. My project management responsibilities led me to spearhead and engage in the development and design of the organization’s PHP based website, built with Wordpress.
        </div>
        <div className='aboutText'>
        For many years I had been interested in technology, web development and design. My initial fascination began with the emergence of blogging and how it enabled me to share my thoughts and ideas in a way unimagined in previous generations. The time I had spent in undergraduate and graduate school examining the intricacies of unspoken languages instilled in me a love for the art and science of interpreting evolving forms of written communication. As a result, I found a natural transition into coding and became a full-stack software engineer. While I am most comfortable working with <b>JavaScript, Node.js, CSS and HTML</b>, I have a working understanding of <b>Ruby, TypeScript</b> (which is technically a strongly typed implementation of JavaScript) and PHP. I have worked with a number of development teams as both a <b>Scrum Master</b> and a developer to create various applications utilizing <b>React, jQuery, Redux and Angular</b>. Being an advocate for Test Driven Development, I have used <b>Jest, Mocha and Chai </b>as testing frameworks. I have implemented both relational databases, such as <b>PostgreSQL and MySql</b>, and non-relational databases, such as <b>MongoDB</b>. I have also worked with teams to deploy applications with a proxy server using <b>AWS, Heroku, NginX and Docker</b>. Feel free to check out the Projects Page to see a few of these applications. 
        </div>
        <div className='aboutText'>
        As a project manager and scrum master, I seek to utilize my unique combination of technical skills and leadership acumen to build healthy and productive teams. I believe the key to cultivating a dynamic, creative and healthy environment requires fostering trust, loyalty and empowering team members to take ownership in the process. In the highly competitive and faced paced world of technology, it is easy to become laser focused on the task and lose sight of the human element. As a <b>certified facilitator in conflict resolution and communication techniques</b>, I believe the most productive teams incorporate the personal aspect into team dynamics. My goal is to embody the scrum ideal of servant leadership and function as a coach who walks alongside the members of my team to create an environment where they are able to reach their full potential by living courageously and embracing vulnerability.         </div>
        <div className='aboutText'>
        In my free time, I am an avid runner, although you probably figured that out already, but I also enjoy camping, hiking, surfing, baseball, hockey, reading and listening to podcasts. 
        </div>
      </div>
    </div>
  )
}

export default About;