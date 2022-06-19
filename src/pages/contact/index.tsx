import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SPButton } from '../../components/button';
import { Divide, Header, ShadowBox } from '../../components/styledComponents';

const ContactFormGroup = styled(Form.Group)`
  text-align: left;
  margin: 0px 0px 1em;
`

const Contact = () => {

  return (
    <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em' }}>
      <Header style={{ transform: 'translate(0px, 10%)' }}>Contact St. Phillips </Header>
      <Divide width="5%"/>
      <Container fluid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.1245356258205!2d-97.71244058456514!3d30.34741041115083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cbcd47b32e57%3A0xc7d68994921fb949!2s7801%20N%20Lamar%20Blvd%2C%20Austin%2C%20TX%2078752!5e0!3m2!1sen!2sus!4v1655430584623!5m2!1sen!2sus"
          style={{ border: 0, width: '40%', height: '50vh', maxHeight: 464 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" />
        <Container style={{ width: '40%', textAlign: 'left' }}>
          <ShadowBox style={{ width: '100%', padding: '2%' }}>
            <Row>
              <Col>
                <h5>Address:</h5>
                <address>
                  7801 N. Lamar Blvd<br />
                  Suite E178<br />
                  Austin, Texas, 78752<br />
                </address>
              </Col>
              <Col>
                <h5>Bobby Bullard, Senior Pastor</h5>
                Phone: <a href="tel:+15125025404" style={{ color: 'white' }}>(512) 502-5404</a><br />
                Email: <a href="mailto:pastorbb69@yahoo.com" style={{ color: 'white' }}>pastorbb69@yahoo.com</a>
              </Col>
            </Row>
            <Form>
              <ContactFormGroup>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </ContactFormGroup>
              <ContactFormGroup>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </ContactFormGroup>
              <ContactFormGroup>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Message" rows={7} />
              </ContactFormGroup>
              <SPButton text="Submit" onClick={() => alert("Submitting Message!")} />
            </Form>
          </ShadowBox>
        </Container>
      </Container>
    </Container>
  )
}

export default Contact;