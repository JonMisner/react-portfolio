import React from "react";
import photo from "../img/Jon3.jpg";
import github from "../icons/githubLogo5.png";
import MySQL from "../icons/mysqlLogo.png";
import node from "../icons/nodeLogo3.png";
import passport from "../icons/passportjsLogo.png"
import reactLogo from '../icons/reactLogo.png';
import foundationLogo from '../icons/foundationLogo.png';
import bulma from '../icons/bulmaLogo.png';
import mongoDB from '../icons/mongo3Logo.png';
import express from '../icons/expressLogo2.png';
import "../styles/app.css";
import "../styles/frontpage.css";

class Frontpage extends React.Component {

render() {
   return (
      <body className="jumbotron mt-3"> 
      <div className="row">
          <div className="col-9">
            <h1 className="display-4">Jon Misner</h1>
            <h4 className="subtitle">Full Stack Developer</h4>
            <hr className="my-4"/>
            <p>A fresh full stack developer, I’m ready to create and develop a stunning UX in web applications. I studied at Northwestern University where I gained skills in several different web development technologies, with an emphasis on MERN .  My background is in the Service Industry (with my passion being wine and cocktails) and I can bring that work ethic over with me to this new field. With an emphasis on mobile friendly and responsive designs, my goal is to provide polished, sleek, and engaging web applications. Furthermore, I strive to make the UI approachable, and intuitively easy to use for even novice users. Group projects have been a highlight of my coding experience, and I look forward to collaborating with other talented developers and engineers..</p>
          </div>
           <div className="col">
            <img src={photo} className="img-fluid img-thumbnail rounded-circle" alt="Jon"/>
           </div> 
      </div>
      <h4 className="subtitle">Familiar With</h4>
      <hr className="my-4"/>
      <div className="row">
        <div className="col">
          <img src={github} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src={MySQL} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src={node} alt="icon" className="img-fluid node"/>
        </div>
        <div className="col">
          <img src={passport} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src={foundationLogo} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src={bulma} alt="icon" className="img-fluid bulma"/>
        </div>
        <div className="col">
          <img src={mongoDB} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src={express} alt="icon" className="img-fluid express"/>
        </div>
        <div className="col">
          <img src={reactLogo} alt="icon" className="img-fluid"/>
        </div>
      </div>
       
    </body>
   )
}
}

export default Frontpage;