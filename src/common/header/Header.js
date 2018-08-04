import React, { Component } from 'react';
import './header.styl';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom'
import back from '../../assets/images/return.png';
import Output from '../../components/output/OutPut'

class Header extends Component {
  handleClick () {
    window.history.back();
  }
  render () {
    return (
      <Router>
        <div className="App">
          <div className="header-top">
          <div className="header-title">
            <NavLink to="/output" className="top-link">
              <span>收入</span>
            </NavLink>
            <NavLink to="/output" className="top-link">
              <span>支出</span>
            </NavLink>
            <NavLink to="/output" className="top-link">
              <span>转账</span>
            </NavLink>
          </div>
          <div className="header-back" onClick={this.handleClick}>
            <img src={back} alt=""/>
          </div>
          </div>
          <div className="tab-view">
            <Switch>
              <Route path='/output' component={Output}/>
              <Route path='/output' component={Output}/>
              <Route path='/output' component={Output}/>
              <Route component={Output}/>
              {/* 默认为output页面 */}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default Header