import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { SPButton } from '../../components/button';
import { Divide, Header, ShadowBox } from '../../components/styledComponents';
import { api } from '../../config/api';
import { printDateTimeString } from '../../utils/printers';
import { IEvent } from '../events/model';
import staff from '../../data/staff.json';
import { IStaff, JSONStaff, toIStaff } from '../staff/model';
import { googleEncodeAddress } from '../../utils/common';
import { useMediaQuery } from '@mui/material';
import { mobileThreshold } from '../../utils/constants';

const Home = () => {
  const [recentEvent, setRecentEvent] = useState<IEvent | undefined>(undefined)

  const pastor: IStaff | null = toIStaff(staff.find((member) => member.positions.includes("Pastor") || member.positions.includes("Senior Pastor")) as JSONStaff)
  const mobile = useMediaQuery(`(max-width:${mobileThreshold}px)`)

  useEffect(() => {
    api.get('/events/recent')
      .then((response: AxiosResponse<IEvent>) => {
        if (response.status === 204) setRecentEvent(undefined)
        else {
          const event: IEvent = {
            ...response.data,
            startTime: new Date(response.data.startTime),
            endTime: new Date(response.data.endTime)
          }
          setRecentEvent(event)
        }
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <Container fluid className="home-background">
      <Container fluid style={{ display: 'flex', flexDirection: 'row', flexWrap: mobile ? 'wrap-reverse' : 'nowrap', justifyContent: 'center', height: '100vh', maxHeight: 1080, alignItems: 'center' }}>
        <iframe
          src="https://www.youtube.com/embed/live_stream?channel=UChKql4EVoCgSpWNSwqhxOsA"
          style={{ border: 0, width: '100%', height: 'calc(100vh * .50)' }}
          allowFullScreen />
        <Container style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }}>
          <h1>Welcome to St. Phillips Missionary Baptist Church</h1>
          <h3 style={{ fontStyle: 'italic' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          <Divide width="10%" />
          <h2>Sunday Morning Worship - 11:00 AM</h2>
          <h2>Sunday School - 10:00 AM</h2>
          <h2>Wednesday Night Bible Study - 7:00 PM</h2>
          <SPButton text="Watch Service Live" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} style={{ margin: '1% 0px' }} />
        </Container>
      </Container>
      <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', maxHeight: 1080 }}>
        <Header>Join Us For Our Next Service!</Header>
        <Divide width="5%" />
        <ShadowBox fluid style={{ backgroundColor: 'rgba(71, 71, 71, 0.39)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1%', width: '100%', maxWidth: 1650, alignItems: 'center', minHeight: '75%' }}>
          {recentEvent && (
            <>
              <Container style={{ width: '45%' }}>
                <h1 style={{ fontSize: '3em' }}>Next Event: {recentEvent?.name}</h1>
                <h2 style={{ fontStyle: 'italic' }}>Time: {printDateTimeString(recentEvent?.startTime)}</h2>
                <h2 style={{ fontStyle: 'italic' }}>Location: {recentEvent?.location}</h2>
                <SPButton text="See All Upcoming Events" href="/events" style={{ margin: '1.25% 0px' }} />
                <SPButton text="Visit St. Phillips MBC" href="/contact" style={{ margin: '1.25% 0px' }} />
                <SPButton text="Watch Service Live!" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} style={{ margin: '1.25% 0px' }} />
              </Container>
              <iframe
                style={{ border: 0, width: '45%', height: '100%'}}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_EMBED_KEY}&q=${googleEncodeAddress(recentEvent?.location)}`}
                allowFullScreen />
            </>
          )}
        </ShadowBox>
      </Container>
      {pastor && (
        <Container fluid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '2%', height: '100vh', maxHeight: 1080 }}>
          <Image src={pastor.portrait.toString()} style={{ width: '25%', margin: 0 }} />
          <ShadowBox fluid style={{ width: '35%', padding: '1.5%', margin: 0 }}>
            <h2 style={{ fontSize: '2.5em', textAlign: 'center' }}>About The Pastor</h2>
            <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 20, WebkitBoxOrient: 'vertical' }}>
              {pastor.description.split('\n').map((paragraph) => <>{paragraph}<br /><br /></>)}
            </p>
            <SPButton text="Read More" href="/staff" width="100%" />
          </ShadowBox>
        </Container>
      )}
    </Container>
  )
}

export default Home;