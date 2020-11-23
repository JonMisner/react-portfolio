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
            <p>A fresh full stack developer, I’m ready to create and develop a stunning UX in web applications. I studied at Northwestern University where I gained skills in several different web development technologies, with an emphasis on MERN .  My background is in the Service Industry (with my passion being wine and cocktails) and I can bring that work ethic over with me to this new field. With an emphasis on mobile friendly and responsive designs, my goal is to provide polished, sleek, and engaging web applications. Furthermore, I strive to make the UI approachable, and intuitively easy to use for even novice users. Group projects have been a highlight of my coding experience, and I look forward to collaborating with other talented developers and engineers..</p>
          </div>
           <div className="col">
            <img src={photo} className="img-fluid img-thumbnail rounded-circle" alt="Jon"/>
            {/* <a target="_blank" id="resume" href="./assets/MISNERresume2020.pdf">Resume</a> */}
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