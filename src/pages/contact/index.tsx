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
        <Container className="square" style={{ width: '40%', backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1em 1em 1em 0px' }}>
          Google
        </Container>
        <Container style={{ width: '40%', textAlign: 'left' }}>
          <ShadowBox style={{ width: '100%', padding: '2%' }}>
            <Row>
              <Col>
                <h5>Address:</h5>
                <address>
                  7801 N. Lamar Blvd<br />
                  Suite E178<br />
                  Autin, Texas, 78752<br />
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