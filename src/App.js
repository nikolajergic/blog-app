import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppPosts from './pages/AppPosts';
import SinglePost from './pages/SinglePost';
import AddPost from './pages/AddPost';

function App() {
  return (
    <div>
     <Router>
        <nav>
          <ul>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
            <li>
              <Link to='/add'>Add post</Link>
            </li>
          </ul>
        </nav>

          <Switch>
          <Route exact path='/posts'>
            <AppPosts />
          </Route>
          <Route exact path='/post/:id'>
            <SinglePost />
          </Route>
          <Route exact path='/add'>
            <AddPost />
            </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
