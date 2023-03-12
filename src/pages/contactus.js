import { useForm } from '@formspree/react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactForm() {
  const [state, handleSubmit] = useForm('your_formspree_form_id');

  if (state.succeeded) {
    return <p>Thank you for your message!</p>;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formName">
              <Form.Label column md={4}>Name</Form.Label>
              <Col md={8}>
                <Form.Control type="text" name="name" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEmail">
              <Form.Label column md={4}>Email</Form.Label>
              <Col md={8}>
                <Form.Control type="email" name="email" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formMessage">
              <Form.Label column md={4}>Message</Form.Label>
              <Col md={8}>
                <Form.Control as="textarea" name="message" rows={5} placeholder="Type your message here..." required />
              </Col>
            </Form.Group>

            <Row className="justify-content-center">
              <Button type="submit" variant="primary">Submit</Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
