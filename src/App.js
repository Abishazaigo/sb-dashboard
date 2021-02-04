import { HashRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './Styles/Sb.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact="/">
            <Login />
          </Route>
          <Route exact="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
