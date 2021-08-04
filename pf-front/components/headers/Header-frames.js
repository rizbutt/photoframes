import React, { useState, useEffect } from "react";
import NavBar from "./common/navbar";
import Link from 'next/link';

import { Media, Container, Row, Col } from "reactstrap";
import LogoImage from "./common/logo";


const HeaderTen = ({ logoName, topClass, headerClass,  }) => {
  
  /*=====================
         Pre loader
		 ==========================*/
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);
  }, []);

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  return (
    <div>
      <header id="sticky" className={headerClass}>
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        
        <div className="metro">
          <Container className="layout3-menu">
            <Row>
              <Col sm="12">
                <Row className="main-menu">
                  <Col>
                    <div className="menu-left around-border">
                      <div className="navbar">
                        
                        {/*SideBar Navigation Component*/}
                        
                      </div>
                      <div className="menu-right pull-right">
                        <NavBar />
                      </div>
                    </div>
                  </Col>
                  <div className="absolute-logo">
                    <div className="brand-logo">
                      <LogoImage logo={logoName} />
                    </div>
                  </div>
                  <div>
                    <div className="menu-right pull-right">
                      <div>
                        <div className="icon-nav">
                        <ul className="header-dropdown">
                        <li className="mobile-wishlist">
                                <Link href={`../page/account/wishlist`}>
                                    <a><i className="fa fa-heart" aria-hidden="true"></i></a>
                                </Link>
                            </li>
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"></i> 
                                <ul className="onhover-show-div">
                                    <li>
                                        <Link href={`/page/account/login`} >
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`/page/account/register`} >
                                            <a>Register</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      
    </div>
  );
};

export default HeaderTen;
