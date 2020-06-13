import React from 'react';
import './App.css';
import Landing from './Components/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Trial from './Components/Trial'
import Create from './Components/Create'
import About from './Components/About'
import ButterToast, { POS_RIGHT, POS_TOP } from 'butter-toast'
import AllDeathNotes from './Components/AllDeathNotes';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/trial" exact component={Trial} />
          <Route path="/:id/:name" exact component={Trial} />
          <Route path="/create" exact component={Create} />
          <Route path="/about" exact component={About} />
          <Route path="/users" exact component={AllDeathNotes} />
          <Route path="/" component={AllDeathNotes} />
        </Switch>
      </Router>
      <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
    </div>
  );
}

export default App;
