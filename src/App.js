import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import WhatIdo from "./components/WhatIdo/WhatIdo";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from './components/Contact/Contact'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="app__black"></div>
        <Navbar />

        <Switch>

          <Route path="/contact">

            <Contact />
          </Route>
          <Route path="/portfolio">

            <Portfolio />
          </Route>
          <Route path="/resume">

            <WhatIdo />
          </Route>
          <Route path="/about">

            <About />
          </Route>
          <Route path="/">

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
