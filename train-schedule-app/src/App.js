import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TrainSchedule from './components/TrainSchedule';
import TrainDetails from './components/TrainDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={TrainSchedule} />
        <Route path="/train/:trainNumber" component={TrainDetails} />
      </div>
    </Router>
  );
}

export default App;
