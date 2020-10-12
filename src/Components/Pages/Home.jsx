import React from 'react';
import portrait from '../../../spnPortrait.jpg'
import classnames from 'classnames';
import Background from '../Background'
import DrawerContainer from '../DrawerContainer'

const Home = props => {
  return (
    <div className='mainApp'>
      <DrawerContainer/>
      <Background/>
      <div className='homeContainer'>
        <div className='headerContainer'>
          <span className='frontCopy1'>HI,</span>
          <span className='frontCopy1'>MY NAME IS</span>
          <span className={classnames('frontCopy', 'frontCopy1')}>SCOTT!</span>
          <span className='frontCopy2'>I lead teams & build websites</span>
          <span className='frontCopy2'>Thank you for visiting my page.</span>
        </div>
        <div className='portraitContainer'>
          
          <img src={portrait} className='portrait'></img>
          
        </div>
        
        <div className='quotesContainer'>
          <span className='quote'>“I define a leader as anyone who takes responsibility for finding the potential in people and processes, and who has the courage to develop that potential.”</span>
          <span className='author'>Brené Brown, Dare to Lead</span>
          <span className='quote'>Innovation distinguishes between a leader and a follower.</span>
          <span className='author'>Steve Jobs</span>
          <span className='quote'>It is not the critic who counts; not the man [woman] who points out how the strong man [woman] stumbles, or where the doer of deeds could have done them better. The credit belongs to the man [woman] who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself [herself] in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he [she] fails, at least fails while daring greatly, so that his [her] place shall never be with those cold and timid souls who neither know victory nor defeat.</span>
          <span className='author'>Teddy Roosevelt</span>
          <span className='quote'>Vulnerability is the birthplace of innovation, creativity and change</span>
          <span className='author'>Brené Brown</span>
          <span className='quote'>Such contradictions are an inseparable part of every human culture. In fact, they are culture’s engines, responsible for the creativity and dynamism of our species. Just as when two clashing musical notes played together force a piece of music forward, so discord in our thoughts, ideas, and values compel us to think, reevaluate, and criticize. Consistency is the playground of dull minds.</span>
          <span className='author'>Yuval Noah Harari, Sapiens: A Brief History of Humankind</span>
          <span className='quote'>Success is a function of persistence and doggedness and the willingness to work hard for twenty-two minutes to make sense of something that most people would give up on after thirty seconds.</span>
          <span className='author'>Malcolm Gladwell, Outliers: The Story of Success</span>
        </div>
      </div>
    </div>
  )
}

export default Home;