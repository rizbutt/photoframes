import React from "react";

import HeaderFrame from "../components/headers/Header-frames";
import { withApollo } from "../helpers/apollo/apollo";

import Helmet from "react-helmet";
import favicon from "../public/assets/images/favicon/1.png";
import FramesFooter from "../components/footers/footer-two";
import UserDetailComponent from '../components/Api/userapi';
import Banner from "../components/headers/Banner";

const Fashion = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>
      <UserDetailComponent />
      <HeaderFrame logoName={"logo.png"} topClass="top-header" />
      <Banner />
     
      <FramesFooter logoName={"logo/14.png"} layoutClass="black-subfooter"  />
    </>
  );
};

export default withApollo(Fashion);
