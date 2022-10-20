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
import { Helmet } from 'react-helmet';

const Home = () => {
  const [recentEvent, setRecentEvent] = useState<IEvent | undefined>(undefined)
  const [introHover, setIntroHover] = useState<boolean>(false);

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
    <Container fluid className="home-background" style={{ padding: 0, margin: 0 }}>
      <Helmet>
        <title>St. Phillips Missionary Baptist Church - Austin, TX</title>
        <meta
          name="description"
          content="The official website for St. Phillips Missionary Baptist Church, located in Austin, Texas."
        />
      </Helmet>
      <Container fluid className="home-inside-background" style={{ padding: '5em 1em 10em', margin: 0 }}>
        <Container fluid style={{ display: 'flex', flexDirection: 'row', flexWrap: mobile ? 'wrap-reverse' : 'nowrap', justifyContent: 'center', height: !mobile ? '100vh' : undefined, maxHeight: !mobile ? 1080 : undefined, alignItems: 'center', margin: mobile ? '0px 0px 5em' : undefined }}>
          <iframe
            id="live-service"
            src="https://www.youtube.com/embed/live_stream?channel=UChKql4EVoCgSpWNSwqhxOsA"
            style={{ border: 0, width: '100%', height: '50vh', margin: '2em 0px 0px' }}
            allowFullScreen />
          {!mobile && (
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
              <h2><b>Morning Worship</b> - Sundays at 11:00 AM</h2>
              <h2><b>Sunday School</b> - Sundays at 10:00 AM</h2>
              <h2><b>Bible Study</b> - Wednesdays at 7:00 PM</h2>
              <SPButton text="Watch Service Live" href="#live-service" style={{ margin: '1% 0px', width: '100%' }} anchor />
            </Container>
          )}
          {mobile && (
            <Container style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              alignSelf: 'flex-start'
            }}>
              <h1>Welcome to St. Phillips Missionary Baptist Church</h1>
              <Divide width="3em" />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  margin: '1em 0px',
                  height: '100%'
                }}
              >
                <p style={{ width: '50%', fontStyle: 'italic', padding: '0.5em', fontSize: '2.25ch' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <hr style={{ width: 2, height: 100, color: 'white', opacity: 1 }} />
                <p style={{ width: '50%', padding: '0.4em', fontSize: '1em', alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 'normal' }}>
                  <b>Morning Worship</b>
                  <hr style={{ width: 0, margin: 0 }} />
                  Sundays at 11:00 AM
                  <Divide width="80%" opacity={0.75} />
                  <b>Sunday School</b>
                  <hr style={{ width: 0, margin: 0 }} />
                  Sundays at 10:00 AM
                  <Divide width="80%" opacity={0.75} />
                  <b>Bible Study</b>
                  <hr style={{ width: 0, margin: 0 }} />
                  Wednesdays at 7:00 PM
                </p>
              </div>
              <SPButton text="Watch Service Live" href="#live-service" style={{ margin: '1% 0px', width: '100%' }} anchor />
            </Container>
          )}
        </Container>
        <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: !mobile ? '100vh' : undefined, maxHeight: !mobile ? 1080 : undefined, margin: mobile ? '5em 0px' : undefined }}>
          <Header>Join Us For Our Next Service!</Header>
          <Divide width="3em" />
            {recentEvent && (
              <ShadowBox 
                fluid
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: '3%',
                  width: '100%',
                  maxWidth: 1650,
                  height: !mobile ? '75vh' : 'auto',
                  alignItems: !mobile ? 'center' : undefined,
                  flexWrap: mobile ? 'wrap' : 'nowrap'
                }}>
                <Container style={{ width: '100%', padding: 0, margin: !mobile ? '0px 1em' : '0px 0px 0.5em' }}>
                  <h2 style={{ fontSize: '2.5em'}}>Next Event: {recentEvent?.name}</h2>
                  <h3 style={{ fontStyle: 'italic' }}>Time: {printDateTimeString(recentEvent?.startTime)}</h3>
                  <h3 style={{ fontStyle: 'italic' }}>Location: {recentEvent?.location}</h3>
                  <SPButton text="See All Upcoming Events" href="/events" style={{ margin: '1.25% 0px' }} />
                  <SPButton text="Visit St. Phillips MBC" href="/contact" style={{ margin: '1.25% 0px' }} />
                  <SPButton text="Watch Service Live!" href="#live-service" style={{ margin: '1.25% 0px' }} anchor />
                </Container>
                <iframe
                  style={{ border: 0, width: '100%', height: !mobile ? '100%' : 300, maxHeight: mobile ? 464 : undefined, margin: !mobile ? '0px 1em' : '0.5em 0px 0px' }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_EMBED_KEY}&q=${googleEncodeAddress(recentEvent?.location)}`}
                  allowFullScreen />
              </ShadowBox>
            )}
        </Container>
        {pastor && (
          <Container fluid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '2%', height: !mobile ? '100vh' : undefined, maxHeight: !mobile ? 1080 : undefined, margin: mobile ? '5em 0px 0px' : undefined }}>
            {!mobile && <Image src={pastor.portrait.toString()} style={{ width: '25%', margin: 0 }} />}
            <ShadowBox fluid style={{ width: !mobile ? '60%' : '100%', padding: '1.5%', margin: 0 }}>
              <h2 style={{ fontSize: '2.5em', textAlign: 'center' }}>About The Pastor</h2>
              <h3 style={{ textAlign: 'center' }}>{pastor.name}</h3>
              <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 20, WebkitBoxOrient: 'vertical' }}>
                {pastor.description!.split('\n').map((paragraph) => <>{paragraph}<br /><br /></>)}
              </p>
              <SPButton text="Read More" href="/about" width="100%" onClick={() => window.scroll({ top: 0, behavior: 'smooth' })} />
            </ShadowBox>
          </Container>
        )}
      </Container>
    </Container>
  )
}

export default Home;

/**
 * TODO
 * - implement emailjs to contact form
 * - set up cloudinary account
 * - set up google account
 * - set up auth0 account
 * - set up paypal account
 * - set up render instances
 * - set up emailjs
 * - fix event and photo blocking from auth0 on mobile
 * - remove unused imports
 */