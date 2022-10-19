import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Divide, Header } from '../../components/styledComponents';
import PastorDescription from './components/pastorDescription';
import data from '../../data/staff.json'
import { IStaff, toStaffArray } from './model';
import { Helmet } from 'react-helmet';
import StaffCard from './components/staffCard';
import ChurchDescription from './components/churchDescription';

const Staff = () => {
  const staff: IStaff[] = toStaffArray(data);
  return (
    <Container
      fluid
      style={{
        padding: 0,
        margin: 0,
        backgroundImage: 'url(https://res.cloudinary.com/zaemadethis/image/upload/v1659889411/spmbc/gallery/pexels-pixabay-218480_e0ivoi.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Helmet>
        <title>About St. Phillips</title>
        <meta name="description" content="The history of St. Phillips Missionary Baptist Church and Pastor Bobby Bullard, and the staff members representing the church." />
      </Helmet>
      <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em' }}>
        <Header style={{ transform: 'translate(0px, 10%)' }}>About St. Phillips Missionary Baptist Church</Header>
        <Divide width="5%"/>
        <ChurchDescription />
        <PastorDescription member={staff.find((member) => member.positions.includes("Pastor"))!} />
        <Container fluid style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          {staff.filter((member) => !member.positions.includes("Pastor")).map((member) => <StaffCard member={member} />)}
        </Container>
      </Container>
    </Container>
  )
}

export default Staff;