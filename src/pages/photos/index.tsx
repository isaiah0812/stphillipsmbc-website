import { ImageList, ImageListItem } from '@mui/material';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Divide, Header } from '../../components/styledComponents';
import { api } from '../../config/api';
import { IPhoto } from './model';

const Photos = () => {
  const noChange = true
  const [photos, setPhotos] = useState<IPhoto[]>([] as IPhoto[])

  useEffect(() => {
    api.get('/photos')
      .then((response: AxiosResponse<IPhoto[]>) => {
        response.data.map((photo) => photo.url = new URL(photo.url))
        
        setPhotos(response.data)
      })
  }, [noChange])

  return (
    <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em' }}>
      <Header style={{ transform: 'translate(0px, 10%)' }}>Photos</Header>
      <Divide width="5%"/>
      <ImageList variant="masonry" cols={3} gap={8}>
        {photos.map((photo) => (
          <ImageListItem>
            <img src={photo.url.toString()} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}

export default Photos;