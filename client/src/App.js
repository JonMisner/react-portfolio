import React from "react";
import {Route} from "react-router-dom";
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Navbar from "./components/navbar.js";
import Frontpage from "./components/frontpage";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume.js";


function App() {
  return (
      <div className="App">
        <Navbar />
          <Container>
            <Route exact path="/" component={Frontpage} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Container>
      </div>
  );
}

export default App;
