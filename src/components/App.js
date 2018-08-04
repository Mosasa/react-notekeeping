import React, { Component } from 'react';
import Bill from './bill/Bill';
import Belongings from './belongings/Belongings';
import Report from './report/Report';
import ManageFinances from './manageFinances/ManageFinances';
import More from './more/More';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom'//as 将BrowserRouter用router替代
// import '../assets/stylus/reset.styl';
// import '../assets/stylus/font.styl';

//将图片作为资源引入
import belongings from '../assets/fonts/belongings.png';
import belongings1 from '../assets/fonts/belongings1.png';
import report from '../assets/fonts/report.png';
import report1 from '../assets/fonts/report1.png';
import bill from '../assets/fonts/bill.png';
import bill1 from '../assets/fonts/bill1.png';
import manageFinances from '../assets/fonts/money.png';
import manageFinances1 from '../assets/fonts/money1.png';
import more from '../assets/fonts/more.png';
import more1 from '../assets/fonts/more1.png';
import './App.styl';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      exArr: [0, 0, 0, 0, 0],
    }
  };
  activateButton(id) {  
    //根据参数id，来确定激活五个tab中的哪一个          
    let tempArr = [0, 0, 0, 0, 0]             
    tempArr[id] = 1;            
    this.setState({exArr: tempArr});         
  }
  handle () {
    console.log('lalala');
    window.location.href= './belongings'
  }
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
              <NavLink to="/belongings" className="nav-link" onClick = { this.activateButton.bind(this, 0)
              }>
                <img src={ (this.state.exArr)[0] ? belongings1 : belongings } alt="" className="tab-logo"/> 
                <span>资产</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/report" className="nav-link" onClick = { this.activateButton.bind(this, 1)
              }>
                <img src={ (this.state.exArr)[1] ? report1 : report } alt="" className="tab-logo" /> 
                <span >报表</span>
              </NavLink>
            </div>
            <div className="tab-item selected">
              <NavLink to="/bill" className="nav-link" onClick = { this.activateButton.bind(this, 2)
              }>
                <img src={ (this.state.exArr)[2] ? bill1 : bill} alt="" className={(this.state.exArr)[2] ? "tab-logo-active":"tab-logo"} onClick={(this.state.exArr)[2] ? this.handle.bind(this) : '' } />
                <span style={{display: (this.state.exArr)[2] ? 'none' : 'block'}} >账单</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/manageFinances" className="nav-link" onClick = { this.activateButton.bind(this, 3)
              }>
                <img src={ (this.state.exArr)[3] ? manageFinances1 : manageFinances } alt="" className="tab-logo"/> 
                <span>理财</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/more" className="nav-link" onClick = { this.activateButton.bind(this, 4)
              }>
                <img src={ (this.state.exArr)[4] ? more1 : more } alt="" className="tab-logo"/> 
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
