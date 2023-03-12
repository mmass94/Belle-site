import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "@/components/footer";
import Carousel from "@/components/Carousel";
import ContactinfoUpperSide from "../components/ContactinfoUpperSide";
import Logo from "../components/Logo";
import SocialIcons from "../components/socialIcons";

import { Container, Row, Col } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <ContactinfoUpperSide />
      <SocialIcons />
      <Logo />
      <NavbarComponent />
      <Carousel />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
