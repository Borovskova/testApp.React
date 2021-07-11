import React from 'react';
import './index.css';
import * as calendar from  './calendar';
import { Link } from "react-router-dom";




export default class Calendar extends React.Component {
  static defaultProps = {
    date: new Date(),
    years: [2014,2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    monthNames: ['Январь','Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
    'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDayNames: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    onChange: Function.prototype
  };

state = {
  date: this.props.date,
  currentDate: new Date(),
  selectedDate: null
};

get year() {
  return this.state.date.getFullYear();
}
get month() {
  return this.state.date.getMonth();
}
get day() {
  return this.state.date.getDate();
}

handlePrevMonthButtonClick = () => {
const date = new Date(this.year, this.month - 1);
this.setState({ date });
};
handleNextMonthButtonClick = () => {
  const date = new Date(this.year, this.month + 1);
  this.setState({ date });
};

handleSelectChange = () => {
const year = this.yearSelect.value;
const month = this.monthSelect.value;

  const date = new Date(year, month);
  this.setState({ date });
};

handleDayClick = date => {
  this.setState({ selectedDate: date });
window.open("/components/listOfFilms/Main")
  this.props.onChange(date);
};

  render() {
    const { years, monthNames, weekDayNames } = this.props;

    const monthData = calendar.getMonthData(this.year, this.month);

    return(


      <div className="calendar">
       <header>

       <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

       <select
       ref={element => this.monthSelect = element}
       value={this.month}
       onChange={this.handleSelectChange} >
       {monthNames.map((name, index) =>
         <option key={name} value={index}>{name}</option>
       )}
       </select>

       <select
       ref={element => this.yearSelect = element}
       value={this.year}
       onChange={this.handleSelectChange}>
       {years.map(year =>
         <option key={year} value={year}>{year}</option>
       )}
       </select>

       <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
       </header>

       <table>

       <thead>
       <tr>
       {weekDayNames.map(name =>
         <th key={name}>{name}</th>
       )}
       </tr>
       </thead>
       <tbody>
      { monthData.map((week, index) =>
        <tr key={index} className='week'>
        {week.map((date, index) => date ?
          <td
          key={index}
          className="day"
          onClick={() => this.handleDayClick(date)}
          >{date.getDate()}
          </td>
          :
          <td key={index}></td>
        )}
        </tr>
      )}
       </tbody>
       </table>
      </div>
    );
  }
}
