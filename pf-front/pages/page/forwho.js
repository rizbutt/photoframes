import React, { useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import Link from 'next/link';
import { Container, Row, Col, Media, Card } from "reactstrap";


const ForWhho = () => {
    return (
        <CommonLayout >
            <Container>
                <Row className="w-75 px-5 py-2 mx-auto my-3 box_boder_shadow" >
                    <h1 className="main_box_heading">Who's it for?</h1>
                    <Col className="py-3 lg-5 box_style pull-left">
                        <img src="images/step2.svg" alt="img here"/>
                            <Link href={`/page/yourname`} >
                                 <h2 className="box_heading">For myself</h2>
                            </Link>
                            <p>I'm decorating my walls</p>
                    </Col>
                    <Col className="spacer"></Col>
                    <Col className="lg-5 box_style py-3 pull-right">
                        <img src="images/step2.svg" alt="img here"/>
                        <Link href={`/page/yourname`} >
                            <h2 className="box_heading">For someone else</h2>
                        </Link>
                        <p>I'm buying a gift</p>
                    </Col>
                    
                </Row>
            </Container>
            
        
        </CommonLayout>
    );
};

export default ForWhho;