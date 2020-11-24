import React from "react";
import {
    Card, CardHeader, CardBody,
    CardTitle, Row, Col, NavLink
} from 'reactstrap';
import emailLogo from "../icons/blueMailLogo.png";
import githubLogo from "../icons/githubLogo5.png";
import linkedinLogo from "../icons/linkedinLogo.png";

import { useMediaQuery } from 'react-responsive';
import "../styles/contact.css"

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
                        <CardHeader tag="h3" className="cardHeader">
                            <Row>
                                <Col className="ml-4 text-center">Jon Misner</Col>
                            </Row>
                        </CardHeader>
                        <CardBody className="cardBody">
                            <Row>
                                <Col className="text-center m-3">
                                    <CardTitle className="lead text-center font-weight-bold">Full Stack Developer</CardTitle>
                                    <hr className="m-3" />
                                    <NavLink href="mailto:jonmisner.developer@gmail.com" target="_blank"><img className="logo" src={emailLogo} alt="Logo"/> </NavLink>
                                    <NavLink href="https://www.linkedin.com/in/jonathon-misner-93395b40/" target="_blank"><img className="logo" src={linkedinLogo} alt="Logo"/></NavLink>
                                    <NavLink href="https://github.com/JonMisner" target="_blank"><img className="logo" src={githubLogo} alt="Logo"/> </NavLink>                
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
                            <Row className="justify-content-center">Jon Misner</Row>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center mt-3">
                                <CardTitle className="lead font-weight-bold">Full Stack Developer</CardTitle>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="text-center">
                                    <NavLink href="mailto:jonmisner86@gmail.com" target="_blank"><img className="logo" src={emailLogo} alt="Logo"/></NavLink>
                                    <NavLink href="https://www.linkedin.com/in/joe-young-8a499a18a/" target="_blank"><img className="logo" src={linkedinLogo} alt="Logo"/></NavLink>
                                    <NavLink href="https://github.com/JYoung32" target="_blank"><img className="logo" src={githubLogo} alt="Logo"/></NavLink>
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