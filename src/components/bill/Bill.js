import React, { Component } from 'react';
import { Timeline } from 'antd';
import Scroll from '../../common/scroll/Scroll';
import './bill.styl'
import traffic from '../../assets/images/jt.png';
import general from '../../assets/images/yb.png';
import rent from '../../assets/images/fz.png';
import makeup from '../../assets/images/hfcz.png';
import liwu from '../../assets/images/liwu.png';
import date from '../../assets/images/date.png';
import pulldown from '../../assets/images/pulldowm.png';

class Belongings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshScroll: true
    }
  }
  render() {
    return (
      <Scroll refresh={this.state.refreshScroll}>
      <div className="app">
          <div className="gift">
            <img src={liwu} alt=""/>
          </div>
          <div className="timeline">
              <Timeline>
                <Timeline.Item dot={<div className="topDot" ><span>默认账本</span><img src={pulldown} alt="" className="iconDot"/></div>} >
                </Timeline.Item>
                <div className="input">8月收入 <span>5000.00</span></div>
                <Timeline.Item dot={ <div className="preCount"><span>月预算3000.00</span></div> } > </Timeline.Item>
                <div className="output">8月支出 <span>2016.00</span></div>
                <Timeline.Item dot={<div className="imgDiv" style={{backgroundColor: "#EFB0D7"}}><img src={makeup} alt=""  /></div>} >护肤彩妆 500.00</Timeline.Item>
                <Timeline.Item dot={<div className="imgDiv" style={{backgroundColor: "#5F83E8"}}><img src={rent} alt=""/></div>} >房租 2000.00</Timeline.Item>
                <Timeline.Item dot={<div className="imgDiv" style={{backgroundColor: "#9EDDF7"}}><img src={general} alt="" alt="" /></div>} >一般 8.00</Timeline.Item>
                <Timeline.Item dot={<div className="imgDiv" style={{backgroundColor: "#8CA6EE"}} ><img src={traffic} alt=""/></div>} >交通 8.00</Timeline.Item>
                <Timeline.Item dot={<div className="imgDiv" style={{backgroundColor: "#9EDDF7"}}><img src={general} alt=""   alt="" /></div>} >一般 8.00</Timeline.Item>
              </Timeline>
          </div>
          <div className="date">
            <img src={date} alt=""/>
          </div>
      </div>
      </Scroll>

    )
  }
}

export default Belongings