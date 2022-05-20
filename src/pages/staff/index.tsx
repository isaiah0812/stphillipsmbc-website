import React from 'react';
import { Container } from 'react-bootstrap';
import { Divide, Header } from '../../components/styledComponents';
import StaffDescription from './components/staffDescription';

const Staff = () => {
  return (
    <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em' }}>
      <Header style={{ transform: 'translate(0px, 10%)' }}>The Staff at St. Phillips</Header>
      <Divide width="5%"/>
      <StaffDescription />
      <StaffDescription />
      <StaffDescription />
      <StaffDescription />
      <StaffDescription />
      <StaffDescription />
      <StaffDescription />
      <StaffDescription />
    </Container>
  )
}

export default Staff;