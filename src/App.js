import './App.css';
import CampusLeaseContext, { CampusLeaseContextDefaultValue } from "./Context"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Explore from './components/Pages/Explore';
import Contact from './components/Pages/Contact';
import Submit from './components/Pages/Submit';


function App() {
  // This value should match the default context value so consumer's know what to expect.
  const value = {...CampusLeaseContextDefaultValue};

  return (
    <>
      <CampusLeaseContext.Provider value={value}>
        <Router>
          <NavBar />

          <div className="pages">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/explore" component={Explore} />
              <Route path="/contact" component={Contact} />
              <Route path="/submit" component={Submit} />
            </Switch>
          </div>
        </Router>
      </CampusLeaseContext.Provider>
    </>
  );
}

export default App;
