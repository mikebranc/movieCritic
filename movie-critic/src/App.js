import logo from './logo.svg';
import './App.css';
import Searchbar from './Components/Searchbar';
import Search from './Pages/Search';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Watchlist from './Pages/Watchlist';
import Movie from './Pages/Movie'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ReviewList from './Components/ReviewList';

function App() {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <Navbar />
            <Searchbar />
          </Route>
          <Route path='/search'>
            <Navbar/>
            <Search />
          </Route>
          <Route path='/movie'>
            <Navbar/>
            <Movie/>

          </Route>
          <Route path='/list'>
            <Watchlist />
            <Navbar />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/'>
            <Home />
            <Navbar />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
