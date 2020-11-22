import React from "react";
// import { Jumbotron, Row, Col } from 'reactstrap';

// import './style.css';

import photo from "../img/Jon3.jpg";
import github from "../icons/githubLogo5.png";

class Frontpage extends React.Component {

render() {
   return (
      <main className="jumbotron mt-3"> 
      <div className="row">
          <div className="col-9">
            <h1 className="display-4">Jon Misner</h1>
            <h4 className="subtitle">Full Stack Developer</h4>
            <hr className="my-4"/>
            <p>I grew up in Tucson, and studied at the University of Arizona. Much of my professional life has been spent in restaurants serving, bartending, and managing. I moved to Chicago in 2012, and I'm currently studying full stack development at Northwestern University.</p>
          </div>
           <div className="col">
            <img src={photo} className="img-fluid img-thumbnail rounded-circle" alt="Jon"/>
            <a target="_blank" id="resume" href="./assets/MISNERresume2020.pdf">Resume</a>
           </div> 
      </div>
      <h4 className="subtitle">Familiar With</h4>
      <hr className="my-4"/>
      <div className="row">
        <div className="col">
          <img src={github} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src="../icons/githubLogo5.png" alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src="../icons/githubLogo5.png" alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src="../icons/githubLogo5.png" alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img ssrc="../icons/githubLogo5.png" alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src="../icons/githubLogo5.png" alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src="../icons/githubLogo5.png" alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src="../icons/githubLogo5.png" alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img ssrc="../icons/githubLogo5.png" alt="icon" className="img-fluid"/>
        </div>
      </div>
       
    </main>
   )
}
}

export default Frontpage;