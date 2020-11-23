import React from "react";
import {
    Card,
   //   Button,
      CardHeader, CardBody,
    CardTitle, Row, Col, NavLink
} from 'reactstrap';
import emailLogo from "../icons/blueMailLogo.png";
import githubLogo from "../icons/githubLogo5.png";
import linkedinLogo from "../icons/linkedinLogo.png";
// import headshot from "../../Pictures/selfie.jpeg";
// import resume from "../../Pictures/Web-Dev-Resume.pdf";
// import "./style.css";
import { useMediaQuery } from 'react-responsive';

const Contact = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });

    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

    return (
        <div>    
            {isDesktopOrLaptop && <>
                <h3 className="m-5 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="w-50 mt-3">
                        <CardHeader tag="h3" >
                            <Row>
                                <Col className="ml-4">
                                    Jon Misner
                                </Col>
                                {/* <Button color="secondary" className="mr-5" href={resume} target="_blank">Resume</Button> */}
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                {/* <Col xs="5"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Col> */}
                                <Col className="text-Left m-3">
                                    <CardTitle className="lead text-center font-weight-bold">Full Stack Developer</CardTitle>
                                    <hr className="m-3" />
                                    <NavLink href="mailto:jonmisner.developer@gmail.com"><img className="logo" src={emailLogo} alt="Logo"/> : Jon Misner</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/joe-young-8a499a18a/"><img className="logo" src={linkedinLogo} alt="Logo"/> : Jon Misner</NavLink>
                                    <NavLink href="https://github.com/JYoung32"><img className="logo" src={githubLogo} alt="Logo"/> : JonMisner</NavLink>                
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
            {isTabletOrPhone && <>
                <h3 className="m-3 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="m-3">
                        <CardHeader tag="h3" >
                            <Row className="justify-content-center">
                                Jon Misner
                            </Row>
                        </CardHeader>
                        <CardBody>
                            {/* <Row className="justify-content-center"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Row> */}
                            <Row className="justify-content-center mt-3">
                                <CardTitle className="lead font-weight-bold">Software Engineer</CardTitle>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="text-center">
                                    {/* <Button color="secondary" className="mb-3" href={resume} target="_blank">Resume</Button> */}
                                    <NavLink href="mailto:jonmisner86@gmail.com"><img className="logo" src={emailLogo} alt="Logo"/> : Joseph Young</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/joe-young-8a499a18a/"><img className="logo" src={linkedinLogo} alt="Logo"/> : Joseph Young</NavLink>
                                    <NavLink href="https://github.com/JYoung32"><img className="logo" src={githubLogo} alt="Logo"/> : JYoung32</NavLink>
                                </Col>                
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
        </div>
    );
}

export default Contact;