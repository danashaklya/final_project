
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Post } from './components/pages/Post';
import {Saved} from './components/pages/Saved';
import {Profile} from './components/pages/Profile';
import {LoginPage} from './components/pages/LoginPage';


function App() {
  return (
    <Router>
      <Navbar /> 
      <Switch>
      <Route exact path="/">
          <Post />
        </Route>
        <Route path="/saved">
           <Saved />
        </Route>
        <Route path="/post/:id">
          <Profile/>
        </Route>
        <Route path='/login'>
            <LoginPage />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
