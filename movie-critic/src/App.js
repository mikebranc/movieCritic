import logo from './logo.svg';
import './App.css';
import Searchbar from './Components/Searchbar'
import Search from './Pages/Search'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <Searchbar />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Searchbar />
        </Route>
      </Switch>
    </>
  </Router>
  );
}

export default App;
