import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Divide, ShadowBox } from '../../../components/styledComponents';
import { IStaff } from '../model';

interface StaffDescriptionProps {
  member: IStaff
}

const StaffDescription = ({ member }: StaffDescriptionProps) => {
  return (
    <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Image src={member.portrait.toString()} style={{ width: '20%', maxHeight: 460, height: '50vh', objectFit: 'cover', position: 'sticky', top: 0 }} />
        <ShadowBox style={{ width: '100%', maxWidth: 1200, padding: '1%', margin: '0px 0px 0px 1em', textAlign: 'left' }}>
          <h2>{member.name}</h2>
          <h3 style={{ fontStyle: 'italic' }}>{member.positions.join(", ")}</h3>
          {member.description.split('\n').map((paragraph) => <p>{paragraph}</p>)}
        </ShadowBox>
      </Container>
      <Divide width="100%" style={{ maxWidth: 'calc(20% + 1200px + 1em)', borderRadius: 0 }} />
    </Container>
  )
}

export default StaffDescription;