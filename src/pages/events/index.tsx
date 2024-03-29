import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Container, Modal, Table } from 'react-bootstrap';
import { Header, Divide, ShadowBox } from '../../components/styledComponents';
import { api } from '../../config/api';
import { googleEncodeAddress } from '../../utils/common';
import { printDateString, printDateTimeString, printTimeString } from '../../utils/printers';
import { IEvent, sortEventLists, TimedEventList, toTimedEventLists } from './model';
import styled from 'styled-components';
import { mobileThreshold } from '../../utils/constants';
import { useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

const RecentEventContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  padding: 0;
  flex-wrap: nowrap;

  @media(max-width: ${mobileThreshold}px) {
    flex-wrap: wrap-reverse;
  }
`

const RecentEventDescription = styled(ShadowBox)`
  width: 100%;
  text-align: left;
  margin: 1em 0px 1em 0.5em;
  padding: 1em;

  @media(max-width: ${mobileThreshold}px) {
    margin: 1em 0px 0.5em;
  }
`

const RecentEventIFrame = styled.iframe`
  border: 0;
  width: 60%;
  min-height: 464px;
  margin: 1em 0.5em 1em 0px;

  @media(max-width: ${mobileThreshold}px) {
    margin: 0.5em 0px 1em;
    width: 100%;
  }
`

interface EventListItemProps {
  event: IEvent
  onClick: () => void
}

const EventListItem = ({ event, onClick }: EventListItemProps): JSX.Element => {
  const [hovering, setHovering] = useState<boolean>(false)
  const mobile = useMediaQuery(`(max-width:${mobileThreshold}px)`)

  const hover = () => setHovering(true)
  const leave = () => setHovering(false)

  return (
    <>
      <tr>
        <td style={{ textAlign: 'left', borderBottomStyle: mobile ? 'none' : undefined }}>{event.name}</td>
        <td style={{ textAlign: !mobile ? 'center' : 'right', borderBottomStyle: mobile ? 'none' : undefined }}>{printTimeString(event.startTime)}</td>
        {!mobile && (
          <td style={{ textAlign: 'right' }}>
            <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
              {event.description}
            </p>
            <button style={{ border: 0, backgroundColor: 'transparent', textDecoration: hovering ? 'underline' : 'none' }} onClick={onClick} onMouseEnter={hover} onMouseLeave={leave}>[Click to Read More]</button>
          </td>
        )}
      </tr>
      {mobile && (
        <tr>
          <td colSpan={2} style={{ paddingTop: 0 }}>
            <button style={{ border: 0, backgroundColor: 'transparent', textDecoration: hovering ? 'underline' : 'none' }} onClick={onClick} onMouseEnter={hover} onMouseLeave={leave}>[Click to Read More]</button>
          </td>
        </tr>
      )}
    </>
  )
}

const Events = (): JSX.Element => {
  const [events, setEvents] = useState<TimedEventList[]>([] as TimedEventList[]);
  const [mostRecent, setMostRecent] = useState<IEvent>();
  const [selectedEvent, setSelectedEvent] = useState<IEvent>({ name: '', description: '', startTime: new Date(), endTime: new Date(), location: ''});
  const [showEventModal, setShowEventModal] = useState<boolean>(false);

  const mobile = useMediaQuery(`(max-width:${mobileThreshold}px)`);

  const openEventModal = (event: IEvent) => {
    setSelectedEvent(event)
    setShowEventModal(true)
  }
  const closeEventModal = () => setShowEventModal(false)

  useEffect(() => {
    api.get('/events')
      .then((response: AxiosResponse<IEvent[]>) => {
        response.data.map((event) => {
          event.startTime = new Date(event.startTime)
          event.endTime = new Date(event.endTime)
        })
        const now = new Date()
        const futureEvents = sortEventLists(toTimedEventLists(response.data.filter((event) => event.startTime > now)))

        const firstEventListCopy = TimedEventList.copy(futureEvents[0])
        futureEvents[0].removeFirstEvent()

        setEvents([futureEvents[0], ...(futureEvents.slice(1, futureEvents.length))])
        setMostRecent(firstEventListCopy.events[0])
      })
      .catch((error) => {
        console.error(error)
      })
  }, []);

  return (
    <Container
      fluid
      style={{
        padding: 0,
        margin: 0,
        backgroundImage: 'url(https://res.cloudinary.com/di3snrvvx/image/upload/v1666923183/spmbc/assets/banquet_dobdui.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '80%'
      }}
    >
      <Helmet>
        <title>Events at St. Phillips</title>
        <meta name="description" content="All upcoming events at St. Phillips Missionary Baptist Church." />
      </Helmet>
      <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em 10em' }}>
        <Header style={{ transform: 'translate(0px, 10%)' }}>Upcoming Events</Header>
        <Divide width="5em"/>
        {
          mostRecent && (
            <RecentEventContainer fluid>
              <RecentEventIFrame
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAPS_EMBED_KEY}&q=${googleEncodeAddress(mostRecent.location)}`}
                allowFullScreen />
              <RecentEventDescription fluid>
                <h1 style={{ fontSize: '3em' }}>Next Event: {mostRecent.name}</h1>
                <h2 style={{ fontStyle: 'italic' }}>Start Time: {printDateTimeString(mostRecent.startTime)}</h2>
                <h2 style={{ fontStyle: 'italic' }}>End Time: {printDateTimeString(mostRecent.endTime)}</h2>
                <h2 style={{ fontStyle: 'italic' }}>Location: {mostRecent.location}</h2>
                <p style={{ fontStyle: 'italic' }}>{mostRecent.description}</p>
              </RecentEventDescription>
            </RecentEventContainer>
          )
        }
        <ShadowBox fluid style={{ padding: '1em 2em', margin: '0px 1em' }}>
          <h3 style={{ textAlign: 'left' }}>More Events</h3>
          <hr style={{ border: '2px solid white', opacity: 1 }}/>
          <Table responsive>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', width: '33%' }}>Event Name</th>
                <th style={{ textAlign: !mobile ? 'center' : 'right', width: '33%' }}>Event Time</th>
                {!mobile && <th style={{ textAlign: 'right', width: '33%' }}>Event Description</th>}
              </tr>
            </thead>
            <tbody>
              {
                events.filter((eventList) => eventList.events.length > 0).map((eventList) => (
                  <>
                    <tr>
                      <td colSpan={!mobile ? 3 : 2} style={{ color: '#DBDBDB' }}>{printDateString(eventList.date)}</td>
                    </tr>
                    {eventList.events.map((event) => <EventListItem event={event} onClick={() => openEventModal(event)} />)}
                  </>
                ))
              }
            </tbody>
          </Table>
        </ShadowBox>
        <Modal show={showEventModal} onHide={closeEventModal} centered size='xl' scrollable>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: 'black' }}>{selectedEvent.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', flexDirection: 'row-reverse', flexWrap: !mobile ? 'nowrap' : 'wrap' }}>
              <div style={{ margin: !mobile ? '1em 0px 1em 1em' : '1em 0px', padding: !mobile ? '1em' : '0px', width: '100%' }}>
                <h1 style={{ fontSize: '2.5em', color: 'black' }}>{selectedEvent.name}</h1>
                <h2 style={{ fontStyle: 'italic', color: 'black' }}>Start Time: {printDateTimeString(selectedEvent.startTime)}</h2>
                <h2 style={{ fontStyle: 'italic', color: 'black' }}>End Time: {printDateTimeString(selectedEvent.endTime)}</h2>
                <h2 style={{ fontStyle: 'italic', color: 'black' }}>Location: {selectedEvent.location}</h2>
                <p style={{ fontStyle: 'italic', color: 'black' }}>{selectedEvent.description}</p>
              </div>
              <iframe
                style={{ border: 0, width: '100%', minHeight: 464 }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAPS_EMBED_KEY}&q=${googleEncodeAddress(selectedEvent.location)}`}
                allowFullScreen />
            </Modal.Body>
        </Modal>
      </Container>
    </Container>
  )
}

export default Events;