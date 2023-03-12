import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import SocialIcons from '../components/socialIcons';

const Footer = () => {
  return (
    <footer className="bg-light py-2">
      <Container fluid>
        <Row className="align-items-end">
        <Col md={2} className="d-flex justify-content-center">
            <Image src="/belleigray.png" alt="Logo 4"  width={150} height={150} />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Image src="/righfooterimg.png" alt="Logo 3"  width={250} height={250} />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Image src="/leftfooterimg.png" alt="Logo 2"  width={250} height={250} />
          </Col>

          <Col md={2} className="d-flex justify-content-center">
            <Image src="/flembigray.png" alt="Logo 1" width={150} height={150} />
          </Col>
        </Row>
        <Row>
        <Col md={12} className="d-flex flex-column align-items-center justify-content-center">

                    <p className="text-center footerText">FLEMPI.MAIN@GMAIL.COM- +966 55 212 6699 - المملكة العربية السعودية- جدة -واحدة مدن</p>
                    <SocialIcons />
                    <p className='footerText'>&copy; 2023 BELLE All rights reserved</p>


                    </Col>

                 


        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
