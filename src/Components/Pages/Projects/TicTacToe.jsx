import React from 'react';
import githubIcon from '../../../../githubIcon.png';
import TicTacToeReact from './TicTacToe/TTTApp';
import TTTDemo from '../../../../TTTWS.gif'

const TicTacToe = props => {
  let {drawerClick} = props;
  return (
    <div className='project'>
      <div className='projectContainer'>
        <div className='projectDetails'>
          <div className='projectTitle'>
            Play Tic Tac Toe
          </div>
          <div className='projectSubTitle'>
            Description
          </div>
            <div className='projectDescription'>
            Everyone loves Tic Tac Toe and the endless fun trying to outsmart their opponent. This version recreates the classic game by combining it with the classic World Series matchup that began between the Bronx and Brooklyn and now spans the coasts between LA and New York. </div>
            <div className='projectSubTitle'>
              Features
            </div>
              <li className='projectDescription'>The traditional 'X' and 'O' are replaced with baseball logos. </li>
              <li className='projectDescription'>The scoreboard utilizes the stateful component to keep track of wins and ties.</li>
              <li className='projectDescription'>A modal allows a choice of what team will start.</li>
              <li className='projectDescription'>A separate modal announces the game outcome and provides a button to start new game by controlling the state. </li>
          <div className='projectSubTitle'>
            Technology
          </div>
            <div className='projectTechnologies'>
              JAVASCRIPT, REACT
            </div>
            <div className='projectButtonContainer'>
              <button className='projectButton' onClick={()=>drawerClick('playTTT')}>PLAY GAME</button>
            </div>
            <div className='codeLink'>
            <a href='https://github.com/ShlomoLove/TicTacToeReact'>React and Vanilla JS Versions<img src={githubIcon} className='githubIcon'></img></a>
          </div>
        </div>

        <div className='projectDemo'>
        <img src={TTTDemo} className='demoGif'></img>
        </div>

      </div>
    </div>
  )
}

export default TicTacToe;