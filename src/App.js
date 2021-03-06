import './App.css';
import BlogPost from './Components/Container/BlogPost';
import MainCard from './Components/Container/CardCount/MainCard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BlogPost} />
        <Route exact path="/card" component={MainCard} />
      </Switch>
    </Router>
  );
}

export default App;
