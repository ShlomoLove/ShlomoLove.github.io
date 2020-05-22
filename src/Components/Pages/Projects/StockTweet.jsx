import React from 'react';
import StockTweetDemo from '../../../../stock_twits.gif';
import githubIcon from '../../../../githubIcon.png';

const StockTweet = () => {
  const onButtonClick = () => {
    window.location.href = 'http://34.215.30.234/'
  }
  return (
    <div className='project'>
      <div className='projectContainer'>
        <div className='projectDetails'>
          <div className='projectTitle'>
            Stock Twits
          </div>
          <div className='projectSubTitle'>
            Description
          </div>
            <div className='projectDescription'>
            This app enables the user to subscribe to multiple stock symbols to view the latest stock tweets. Upon loading, the app automatically displays the recent trending symbols, providing the user with suggestions on which stock feeds to follow. The user is able to enter the prefered stocks for a subscription list. 
            The user is also able to choose to display all the messages or filter and see messages from one particular stock. If the user is no longer interested in a stock, the user can delete a stock from the subscription list and add different symbols.</div>
            <div className='projectSubTitle'>
              Features
            </div>
              <li className='projectDescription'>Node.js/Express Server routes the requests to handle CORS</li>
              <li className='projectDescription'>SetTimeout utilized to make repeated requests to filter and update messages</li>
              <li className='projectDescription'>Calls to Stock Twits API shows what stocks symbols are trending</li>
              <li className='projectDescription'>Full functionality to intuitively to Add, Delete and Filter Tweets</li>
          <div className='projectSubTitle'>
            Technology
          </div>
            <div className='projectTechnologies'>
              JAVASCRIPT, REACT, AWS EC2, MOMENT, EXPRESS, MATERIAL-UI, STYLED-COMPONENTS, DOCKER
            </div>
            <div className='projectButtonContainer'>
              <button className='projectButton' onClick={(()=> onButtonClick())}>VISIT SITE</button>
            </div>
            <div className='codeLink'>
            <a href='https://github.com/ShlomoLove/stock-tweet'>view code<img src={githubIcon} className='githubIcon'></img></a>
          </div>
        </div>
        <div className='projectDemo'>
          <img src={StockTweetDemo} className='demoGif'></img>
        </div>

      </div>
    </div>
  )
}

export default StockTweet;