import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Divide, Header } from '../../components/styledComponents';

const Photos = () => {
  return (
    <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em' }}>
      <Header style={{ transform: 'translate(0px, 10%)' }}>Photos</Header>
      <Divide width="5%"/>
      <ImageList variant="masonry" cols={3} gap={8}>
        <ImageListItem>
          <img src="/pops.jpg" style={{ width: '50%' }} loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src="/logo192.png" style={{ width: '50%' }} loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src="/logo512.png" style={{ width: '50%' }} loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src="/pops.jpg" style={{ width: '50%' }} loading="lazy" />
        </ImageListItem>
      </ImageList>
    </Container>
  )
}

export default Photos;