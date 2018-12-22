import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppNav from './components/AppNav';
import SearchPage from './components/SearchPage';
import SavedPage from './components/SavedPage';
import Error from './components/Error';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
        <BrowserRouter>
          <Switch>
            <Route path="/saved" component={SavedPage} />
            <Route path="/" component={SearchPage} exact />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
