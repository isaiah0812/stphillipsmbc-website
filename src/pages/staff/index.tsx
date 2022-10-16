import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Divide, Header } from '../../components/styledComponents';
import StaffDescription from './components/staffDescription';
import data from '../../data/staff.json'
import { IStaff, toStaffArray } from './model';
import { Helmet } from 'react-helmet';

const Staff = () => {
  const staff: IStaff[] = toStaffArray(data)
  return (
    <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em' }}>
      <Helmet>
        <title>The Staff</title>
        <meta name="description" content="Biographies of the Pastor and Staff at St. Phillips Missionary Baptist Church." />
      </Helmet>
      <Header style={{ transform: 'translate(0px, 10%)' }}>The Staff at St. Phillips</Header>
      <Divide width="5%"/>
      {staff.map((member) => <StaffDescription member={member} />)}
    </Container>
  )
}

export default Staff;