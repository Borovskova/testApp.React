
import React from 'react';
import Calendar from './components/calendar'
import TV from './components/img/TV.png';
import Main from './components/listOfFilms/Main';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {

  render() {

    return(

      <div className='root'>
      <img className='img' src={TV}  alt="tv"/>
    <p className="p">Для получения списка сериалов, пожалуйста,
    выберите необходимый месяц и день</p>
  
      <Calendar></Calendar>

      <Router>
      <Route exact path="/components/listOfFilms/Main"
      component={Main} />
      </Router>
      </div>

    );
  }
}

export default App;
