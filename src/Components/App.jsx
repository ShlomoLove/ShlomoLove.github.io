import React from 'react';
import Background from './Background';
import classnames from 'classnames';
import PersistentDrawerRight from './TopDrawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './Pages/About';
import Articles from './Pages/Articles';
import Apps from './Pages/Apps'
import Resume from './Pages/Resume';
import Home from './Pages/Home';
import Instructions from './Pages/Instructions';
import TTTApp from './Pages/Projects/TicTacToe/TTTApp';
import Contact from './Pages/Contact';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      home: true,
      background: true,
      about: false,
      articles: false,
      apps: false,
      resume: false,
      playTTT: false,
      contact: false,
    }
    this.drawerClick = this.drawerClick.bind(this);
  }

  drawerClick(page) {
    let tempObj = {};
    for (let key in this.state) {
      key === page ? tempObj[key] = true : tempObj[key] = false;
    }
    page === 'resume' || page === 'playTTT' ? tempObj['background'] = false : tempObj['background'] = true;
    this.setState(tempObj)
  }

  render () {
    return (
      <>
        {/* <div className='drawerContainer'>
          <PersistentDrawerRight className='drawerContainer' drawerClick={this.drawerClick} />
        </div> */}
        {/* <Instructions/> */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Home drawerClick={this.drawerClick}/>
            </Route>
            <Route path="/about">
              <About drawerClick={this.drawerClick}/>
            </Route>
            <Route path="/articles">
              <Articles  drawerClick={this.drawerClick}/>
            </Route>
            <Route path="/apps">
              <Apps  drawerClick={this.drawerClick}/>
            </Route>
            <Route path="/resume">
              <Resume drawerClick={this.drawerClick}/>
            </Route>
            <Route path="/contact">
              <Contact  drawerClick={this.drawerClick}/>
            </Route>
            <Route path="/tictactoe">
              <TTTApp drawerClick={this.drawerClick}/>
            </Route>
          </Switch>
        </Router>
        
        {/* <div className='mainApp'>
          {this.state.background && <Background/>}
          {this.state.home && <Home/>}
          {this.state.about && <About/>}
          {this.state.resume && <Resume/>}
          {this.state.articles && <Articles/>}
          {this.state.apps && <Apps drawerClick={this.drawerClick}/>}
          {this.state.playTTT && <TTTApp/>}
          {this.state.contact && <Contact/>}
        </div> */}
      </>
    )
  }
}

export default App; 