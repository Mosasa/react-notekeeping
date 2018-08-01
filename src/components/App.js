import React, { Component } from 'react';
import Bill from './bill/Bill';
import Belongings from './belongings/Belongings';
import Report from './report/Report';
import ManageFinances from './manageFinances/ManageFinances';
import More from './more/More';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'//as 将BrowserRouter用router替代
// import '../assets/stylus/reset.styl';
// import '../assets/stylus/font.styl';
import belongings from '../assets/fonts/belongings.png';//将图片作为资源引入
import report from '../assets/fonts/report.png';
import bill from '../assets/fonts/bill.png';
import manageFinances from '../assets/fonts/money.png';
import more from '../assets/fonts/more.png';
import './App.styl';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="app-header">
          </header>
          <div className="tab-view">
            <Switch>
              <Route path='/belongings' component={Belongings}/>
              <Route path='/report' component={Report}/>
              <Route path='/bill' component={Bill}/>
              <Route path='/manageFinances' component={ManageFinances}/>
              <Route path='/more' component={More}/>
              <Redirect from="/" to="/bill" />
              <Route component={Bill}/>
              {/* 默认为Bill页面 */}
            </Switch>
          </div>
          <footer className="app-footer footer-tab">
            <div className="tab-item">
              <NavLink to="/belongings" className="nav-link">
                <img src={ belongings } alt="" className="tab-logo"/> 
                <span>资产</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/report" className="nav-link">
                <img src={ report } alt="" className="tab-logo"/> 
                <span>报表</span>
              </NavLink>
            </div>
            <div className="tab-item selected">
              <NavLink to="/bill" className="nav-link">
                <img src={ bill } alt="" className="tab-logo"/> 
                <span>账单</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/manageFinances" className="nav-link">
                <img src={ manageFinances } alt="" className="tab-logo"/> 
                <span>理财</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/more" className="nav-link">
                <img src={ more } alt="" className="tab-logo"/> 
                <span>更多</span>
              </NavLink>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
