import React, { Component } from 'react';
import { Timeline } from 'antd';
import './bill.styl'
import bill from '../../assets/fonts/bill.png';
import liwu from '../../assets/images/liwu.png';
import date from '../../assets/images/date.png';
import pulldown from '../../assets/images/pulldowm.png';

class Belongings extends Component {
  render() {
    return (
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
                <Timeline.Item dot={<img src={bill} alt="" />} > 交通 8.00</Timeline.Item>
                <Timeline.Item dot={<img src={bill} alt="" />} color="red">房租 2000.00</Timeline.Item>
                <Timeline.Item dot={<img src={bill} alt="" />} >一般 8.00</Timeline.Item>
                <Timeline.Item dot={<img src={bill} alt="" />} >支出 2016.00</Timeline.Item>
                <Timeline.Item dot={<img src={bill} alt="" />} >交通 8.00</Timeline.Item>
                <Timeline.Item dot={<img src={bill} alt="" />} color="red">房租 2000.00</Timeline.Item>
                <Timeline.Item dot={<img src={bill} alt="" />} >一般 8.00</Timeline.Item>
              </Timeline>
          </div>
          <div className="date">
            <img src={date} alt=""/>
          </div>
            
      </div>
    )
  }
}

export default Belongings