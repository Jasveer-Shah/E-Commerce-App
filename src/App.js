import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Background, Home, Cart, Header, Browse } from './components/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Background />
        <Switch>
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/browser' component={Browse} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
