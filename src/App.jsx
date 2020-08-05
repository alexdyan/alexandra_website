import React from 'react';
import './App.css';
import Theme from './Theme';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


function App() {
  return (
      <div className="App">
        <Theme>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" /> 
              </Route>
              <Route path='/home'>
                <Home />
              </Route>
            </Switch>

            <Switch>
              <Route path='/about'>
                <About />
              </Route>
            </Switch>

            <Switch>
              <Route path='/projects'>
                  <ProjectList />
                </Route>
            </Switch>
          </Router>
        </Theme>
      </div>
  );
}

export default App;
