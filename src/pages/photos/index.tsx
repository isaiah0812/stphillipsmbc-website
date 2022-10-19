import { IconButton, ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@mui/material';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Popover, OverlayTrigger } from 'react-bootstrap';
import { Divide, Header } from '../../components/styledComponents';
import { api } from '../../config/api';
import { IPhoto } from './model';
import { InfoRounded } from '@mui/icons-material'
import { mobileThreshold } from '../../utils/constants';
import { Helmet } from 'react-helmet';

const Photos = () => {
  const noChange = true
  const [photos, setPhotos] = useState<IPhoto[]>([] as IPhoto[])
  const mobile = useMediaQuery(`(max-width:${mobileThreshold}px)`);

  useEffect(() => {
    api.get('/photos')
      .then((response: AxiosResponse<IPhoto[]>) => {
        response.data.map((photo) => photo.url = new URL(photo.url))
        
        setPhotos(response.data)
      })
  }, [noChange])

  return (
    <Container fluid className="photos-page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em' }}>
      <Helmet>
        <title>Photos of St. Phillips</title>
        <meta name="description" content="Photos from services and events at St. Phillips Missionary Baptist Church." />
      </Helmet>
      <Header style={{ transform: 'translate(0px, 10%)' }}>Photos</Header>
      <Divide width="3em"/>
      <ImageList variant="masonry" cols={mobile ? 1 : 3} gap={8}>
        {photos.map((photo) => (
          <ImageListItem>
            <img src={photo.url.toString()} alt={photo.name} loading="lazy" />
            <ImageListItemBar 
              title={photo.name} 
              subtitle={photo.description}
              actionIcon={
                <OverlayTrigger trigger="click" overlay={
                  <Popover>
                    <Popover.Header style={{ color: 'black' }}>{photo.name}</Popover.Header>
                    <Popover.Body>{photo.description}</Popover.Body>
                  </Popover>
                }>
                  <IconButton sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    <InfoRounded />
                  </IconButton>
                </OverlayTrigger>
              } />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}

export default Photos;