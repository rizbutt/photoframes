import React, { useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import Link from 'next/link';
import { Container, Row, Col,Form, Input } from "reactstrap";


const YourName = () => {
    return (
        <CommonLayout >
        <Container>
            <Row className="w-75 px-5 py-2 mx-auto my-1 " >
                  <Col className="mx-auto box_style">
                    <h2 className="box_heading">Let's get to know you</h2>
                    <Form className="theme-form">
                    <Input type="text" className="form-control my-2" id="name" placeholder="Whats your name?" required="" />
                    <a href="#" className="btn btn-solid btn-lg btn-block">Continue</a>
                    </Form>
                </Col> 
            </Row>
        </Container>

            
        
        </CommonLayout>
    );
};

export default YourName;