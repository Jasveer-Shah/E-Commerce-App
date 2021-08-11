import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Background, Home, Cart, Header, Browse } from './components/index';
import Search from './components/Search';
import Admin from './components/Admin';


function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <Background />
        <Switch>
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/browser' component={Browse} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
