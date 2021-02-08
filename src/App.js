import {QueryClient, QueryClientProvider} from 'react-query';
import {useAlert, positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './Styles/Db.css';
import './Styles/Sb.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Email from './components/Email';
import Form from './components/Form';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route>
            <Email />
        </Route>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
