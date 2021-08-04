import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import SettingContext from "../../helpers/theme-setting/SettingContext";
import { ToastContainer } from "react-toastify";
import { config } from "./config.json";
import {
  Media,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
} from "reactstrap";
import { database } from "firebase";

const ThemeSettings = () => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const context = useContext(SettingContext);
  const [themeLayout, setThemeLayout] = useState(false);
  const layoutType = context.layoutFun;
  const layoutColorFunc = context.layoutColorFun;
  const layoutState = context.state;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  /*=====================
     Tap on Top
     ==========================*/
  useEffect(() => {
    if (config.layout_version && config.layout_type) {
      document.body.className = `${config.layout_version}  ${config.layout_type}`;
    }

    if (localStorage.getItem("color")) {
      document.documentElement.style.setProperty(
        "--theme-deafult",
        localStorage.getItem("color")
      );
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (process.browser) {
      if (document.documentElement.scrollTop > 600) {
        document.querySelector(".tap-top").style = "display: block";
      } else {
        document.querySelector(".tap-top").style = "display: none";
      }
    }
  };

  const openSetting = () => {
    if (process.browser) {
      document.getElementById("setting_box").classList.add("open-setting");
      document.getElementById("setting-icon").classList.add("open-icon");
    }
  };

  const closeSetting = () => {
    if (process.browser) {
      document.getElementById("setting_box").classList.remove("open-setting");
      document.getElementById("setting-icon").classList.remove("open-icon");
    }
  };

  const changeThemeLayout = () => {
    setThemeLayout(!themeLayout);
  };

  if (themeLayout) {
    if (process.browser) {
      document.body.classList.add("dark");
      config.layout_version = "dark";
    }
  } else {
    if (process.browser) {
      document.body.classList.remove("dark");
      config.layout_version = "light";
    }
  }



  const MasterComponent = ({ ribon, bg, name, link, btnName }) => {
    return (
      <Col sm="6" className="text-center demo-effects">
        <div className="set-position">
          <div className={`layout-container ${bg}`}>
            {ribon ? (
              <div className="ribbon-1">
                <span>n</span>
                <span>e</span>
                <span>w</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="demo-text">
            <h4>{name}</h4>
            <div
              className="btn-group demo-btn"
              role="group"
              aria-label="Basic example"
            >
              <Link href={link}>
                <a className="btn new-tab-btn">{btnName} </a>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    );
  };

  return (
    <div>


      <ToastContainer />
    </div>
  );
};

export default ThemeSettings;
