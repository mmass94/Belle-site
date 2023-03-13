import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import SocialIcons from "../components/socialIcons";

const Footer = () => {
  const aspectRatio_Left = 1.419;
  const width_Left = 904;
  const height_Left = width_Left / aspectRatio_Left;

  const aspectRatio_Right = 1.43;
  const width_Right = 911;
  const height_Right = width_Right / aspectRatio_Right;
  return (
    <footer className="bg-light py-2">
      <Container fluid>
        <Row className="align-items-end">
          <Col md={2} className="d-flex justify-content-center">
            <Image
              src="/belleigray.png"
              alt="Logo 4"
              width={150}
              height={150}
            />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Image
              src="/righfooterimg.png"
              alt="Logo 3"
              width={width_Right / 3.5}
              height={height_Right / 3.5}
            />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Image
              src="/leftfooterimg.png"
              alt="Logo 2"
              width={width_Left / 3.5}
              height={height_Left / 3.5}
            />
          </Col>

          <Col md={2} className="d-flex justify-content-center">
            <Image
              src="/flembigray.png"
              alt="Logo 1"
              width={150}
              height={150}
            />
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <p className="text-center footerText">
              INFO@BELLE-SAUDI.COM- +966 55 212 6699 - المملكة العربية السعودية-
              جدة -واحدة مدن
            </p>
            <SocialIcons />
            <p className="footerText">&copy; 2023 BELLE All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
