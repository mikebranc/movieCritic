import logo from './logo.svg';
import './App.css';
import Searchbar from './Components/Searchbar';
import Search from './Pages/Search';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Profile from './Pages/Profile';
import Watchlist from './Pages/Watchlist';
import Movie from './Pages/Movie';
import SignUp from './Pages/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ReviewList from './Components/ReviewList';
import UserProvider from "./UserProvider";

function App() {
  return (
    <UserProvider>
      <Router>
        <>
          <Switch>
            <Route path='/about'>
              <Navbar />
              <Profile />
            </Route>
            <Route path='/search'>
              <Navbar />
              <Search />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/movie'>
              <Navbar />
              <Movie />
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
    </UserProvider>
  );
}

export default App;
