import React from 'react';
import $ from 'jquery';
import {CalendarTop} from './m_calendar_top';

let date = "2016-01-13";

let getDay = (_date)=> {
  let daySec = 24 * 60 * 60 * 1000;
  let lineDayArr = [];
  let monthArray = [];
  let dateArray = _date.split('-');
  let firstDaySec = new Date(dateArray[0] - 0, dateArray[1] - 1, 1);
  let firstMonthWeek = firstDaySec.getDay();
  let calendarFirstDay = new Date(firstDaySec).getTime() - firstMonthWeek * daySec;
  for (let i = 0; i < 42; i++){
    lineDayArr.push(calendarFirstDay + daySec * i)
  }
  var tempArr = []
  lineDayArr.forEach( (_item, _index)=>{
    if(_index !== 0 && _index % 7 === 0){
      monthArray.push(tempArr);
      tempArr = [];
      tempArr.push( new Date(_item))
    } else {
      tempArr.push( new Date(_item))
    }
  });

  debugger;
}
getDay(date)

let Calendar = React.createClass({
  render(){
    return  <CalendarTop />
  }
});

export {Calendar}
