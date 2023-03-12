import { Container, Row, Col } from "react-bootstrap";

const ContactinfoUpperSide = () => {
  return (
    <Container className="d-none d-lg-block">
      <Row>
        <Col>
          <div class="contact-info">
            <div class="info">
              <p className="topContactInfo"> INFO@BELLE-SAUDI.COM</p>

              <span style={{ margin: "0 10px" }}>|</span>
              <p className="topContactInfo"> 6699 212 55 966 +</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ContactinfoUpperSide;
