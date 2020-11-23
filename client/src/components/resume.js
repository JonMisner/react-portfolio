import React from "react";
import resume from "./MISNERresume2020.pdf";
// import { Document, Page } from 'react-pdf';
import { Jumbotron } from "reactstrap";

class Resume extends React.Component {

  render() {
   return (
   <object data={resume} type="application/pdf" width="100%" height="800px"> 
      <p>It appears you don't have a PDF plugin for this browser.
       No biggie... you can <a href={resume}>click here to
         download the PDF file.</a></p>  
   </object>
   );
  };
 }

 export default Resume;