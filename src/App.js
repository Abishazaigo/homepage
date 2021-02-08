import logo from './logo.svg';
import {QueryClient, QueryClientProvider} from 'react-query';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Post from './components/home/Post';
import PostComment from './components/home/PostComment';
import Contact from './components/contact/Contact';
import Load from './components/home/Load';
import './styles/Web.css';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/post">
      <Header />
      <Post />
      <Footer />
      </Route>
      <Route exact path="/postcomment">
      <Header />
      <PostComment/>
      <Footer />
      </Route>
      <Route exact path="/contact">
      <Contact />
      </Route>
      <Route exact path="/load">
      <Load />
      </Route>
      </Switch>
      </Router>
      </QueryClientProvider>
  )
}

export default App;
