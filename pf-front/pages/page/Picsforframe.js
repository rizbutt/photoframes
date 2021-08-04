import React, { useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import Link from 'next/link';
import { Container, Row, Col, Media } from "reactstrap";
import facebooklog from "../../public/assets/images/icon1.png";
import instalogo from "../../public/assets/images/icon2.png";
import frame from "../../public/assets/images/frame-1.png"


const PicWithFrames = () => {
    return (
        <CommonLayout >
            
        <Container>
            <Row>
            
            <Col md={9} className="text-center bgframes">
            <h1 className="box_heading pt-5 pb-2">Pick some photos to get started</h1>
            <Row>
                <Col md={6}>
                <div class="manual_upload">
                <div className="py-1 lg-5 box_style px-5">
                    <input type="file" id="upload_file" />
                    <label for="upload_file"><i class="fa fa-camera" aria-hidden="true"></i>
                    <span>upload photos</span></label>
                </div>
                </div>
                </Col>
                <Col md={1}>
                    <div class="center_points">
                        <span class="center">OR</span>
                    </div>
                </Col>
                <Col md={5}>
                <div class="upload_from_social">
                    <a href=""><img src={facebooklog} alt="Facebook"/>Import from Facebook</a>
                    <a href=""><img src={instalogo} alt="img here"/>Import from Instagram</a>
                </div>
                </Col>
            </Row>

          
          
        
            </Col>
             <Col md={3}>
                    <Row className="pb-2">
                       <Col xs={6} md={4}>
                           <Media object src={frame} alt="Generic placeholder image" className="frame-img pull-left" />
                        </Col>
                        <Col>
                            <a href="" className="align-middle">Frame</a>
                        </Col>
                    </Row>
                    <Row className="pb-2" >
                       <Col xs={6} md={4}>
                           <Media object src={frame} alt="Generic placeholder image" className="frame-img pull-left" />
                        </Col>
                        <Col>
                            <a href="" className="align-middle">Frame</a>
                        </Col>
                    </Row>
                    <Row className="pb-2">
                       <Col xs={6} md={4}>
                           <Media object src={frame} alt="Generic placeholder image" className="frame-img pull-left" />
                        </Col>
                        <Col>
                            <a href="" className="align-middle">Frame</a>
                        </Col>
                    </Row>
                    <Row className="mx-2">
                    <a href="#" className="btn btn-solid  btn-block">Checkout</a>
                    </Row>
                   
                 </Col>
            </Row>
        </Container>
        </CommonLayout>
    );
}

export default PicWithFrames;