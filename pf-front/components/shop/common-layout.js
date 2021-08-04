import React from "react";

import HeaderFrame from "../headers/Header-frames";
import Breadcrubs from "../common/widgets/breadcrubs";
import Helmet from "react-helmet";
import favicon from "../../public/assets/images/favicon/1.png";
import FramesFooter from "../footers/footer-two";

const CommonLayout = ({ children, title, parent, subTitle }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>
      <HeaderFrame topClass="top-header" logoName="logo.png" />
      
      <>{children}</>
      <FramesFooter
        logoName={"logo/14.png"} layoutClass="black-subfooter"
      />
    </>
  );
};

export default CommonLayout;
