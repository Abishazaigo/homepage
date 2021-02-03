import logo from './logo.svg';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Post from './Components/Post';
import Comment from './Components/PostComment';
function App() {
  return (
      <Router>
      <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/Post">
      <Header />
      <Post />
      <Footer />
      </Route>
      <Route exact path="/PostComment">
      <Header />
      <Comment/>
      <Footer />
      </Route>
      </Switch>
      </Router>
  )
}

export default App;
