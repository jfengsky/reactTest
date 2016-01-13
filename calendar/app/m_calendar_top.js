import React from 'react';

let CalendarTop = React.createClass({
      getInitialState(){
        return {
          monthStr: "2015年11月"
        }
      },
      ClickLeft(){
        console.log('click left');
        // this.setState({
        //   monthStr: "2016年10月"
        // })
      },
      ClickRight(){
        console.log('click right')
      },
      render() {
        return  <div className="detail_calendar_month">
                  <span className="month_left month_default" onClick={this.ClickLeft}>
                    <i></i>
                  </span>
                  <span className="month_right" onClick={this.ClickRight}>
                    <i></i>
                  </span>
                  <strong>{this.state.monthStr}</strong>
                </div>;
      }
    })

export {CalendarTop}