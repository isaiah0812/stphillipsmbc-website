import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Divide, ShadowBox } from '../../../components/styledComponents';
import { IStaff } from '../model';
import styled from 'styled-components';
import { mobileThreshold } from '../../../utils/constants';

interface PastorDescription {
  member: IStaff
}

const PastorBox = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;

  @media(max-width: ${mobileThreshold}px) {
    flex-wrap: wrap;
  }
`
const PastorDescriptionBox = styled(ShadowBox)`
  width: 100%;
  max-width: 1200;
  padding: 1%;
  margin: 0px 0px 0px 1em;
  text-align: left;

  @media(max-width: ${mobileThreshold}px) {
    background-color: rgba(71, 71, 71, 0.75);
    margin: 1em 0px;
    z-index: 1;
  }
`

const PastorDescription = ({ member }: PastorDescription) => {
  return (
    <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PastorBox fluid>
        <Image src={member.portrait.toString()} style={{ width: '100%', maxWidth: 345, maxHeight: 460, height: '50vh', objectFit: 'cover', position: 'sticky', top: 20 }} />
        <PastorDescriptionBox fluid>
          <h2>{member.name}</h2>
          {member.description!.split('\n').map((paragraph) => <p>{paragraph}</p>)}
        </PastorDescriptionBox>
      </PastorBox>
      <Divide width="100%" style={{ maxWidth: 'calc(20% + 1200px + 1em)', borderRadius: 0 }} />
    </Container>
  )
}

export default PastorDescription;