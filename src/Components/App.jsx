import React from 'react';
import Background from './Background';
import classnames from 'classnames';
import PersistentDrawerRight from './TopDrawer';
import Apps from './Pages/Apps';
import About from './Pages/About';
import Articles from './Pages/Articles';
import Resume from './Pages/Resume';
import Home from './Pages/Home';
import Instructions from './Pages/Instructions';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      home: true,
      about: false,
      articles: false,
      apps: false,
      resume: false,
    }
    this.drawerClick = this.drawerClick.bind(this);
  }

  // clickAbout () {
  //   this.setState({
  //     home: false,
  //     about: true,
  //     articles: false,
  //     apps: false,
  //     resume: false,
  //   })
  // }

  drawerClick(page) {
    let tempObj = {};
    for (let key in this.state) {
      key === page ? tempObj[key] = true : tempObj[key] = false;
    }
    this.setState(tempObj)
  }

  render () {
    return (
      <div>
        <div className='drawerContainer'>
          <PersistentDrawerRight className='drawerContainer' drawerClick={this.drawerClick} />
        </div>
        <Instructions/>
        <div className='mainApp'>
          
          <Background/>
          {this.state.home && <Home/>}
          {this.state.about && <About/>}
          {this.state.resume && <Resume/>}
          {this.state.articles && <Articles/>}
          {this.state.apps && <Apps/>}
        </div>
      </div>
    )
  }
}

export default App; 