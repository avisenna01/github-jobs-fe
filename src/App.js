import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './views/Login'
import JobDetail from './views/JobDetail'
import JobList from './views/JobList'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Route path="/login" component={Login}>

      </Route>
      <Route path="/" exact component={JobList}>

      </Route>
      <Route path="/job-detail" component={JobDetail}>

      </Route>
    </Router>
  );
}

export default App;
