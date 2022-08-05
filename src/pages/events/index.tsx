import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { SPButton } from '../../components/button';
import { Header, Divide, ShadowBox } from '../../components/styledComponents';
import { api } from '../../config/api';
import { printDateString, printDateTimeString, printTimeString } from '../../utils/printers';
import { IEvent, sortByStart, sortEventLists, TimedEventList, toTimedEventLists } from './model';

const Events = (): JSX.Element => {
  const noChange = true;  // Used to make sure the useEffect only runs on component mount
  const [events, setEvents] = useState<TimedEventList[]>([] as TimedEventList[])
  const [mostRecent, setMostRecent] = useState<IEvent>()

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
  }, [noChange]);

  return (
    <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em' }}>
      <Header style={{ transform: 'translate(0px, 10%)' }}>Upcoming Events</Header>
      <Divide width="5%"/>
      {
        mostRecent && (
          <Container fluid style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
            <div style={{ border: 0, width: '60%', margin: '1em 0px 1em 0px', paddingTop: '25%', position: 'relative', overflow: 'hidden' }}>
              <iframe
                style={{ border: 0, width: '100%', height: '100%', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_EMBED_KEY}&q=${mostRecent.location.replace(', ', ',').replace(' ', '+')}`}
                allowFullScreen />
            </div>
            <ShadowBox fluid style={{ textAlign: 'left', margin: '1em 0px 1em 1em', padding: '1em' }}>
              <h1 style={{ fontSize: '3em' }}>Next Event: {mostRecent.name}</h1>
              <h2 style={{ fontStyle: 'italic' }}>Start Time: {printDateTimeString(mostRecent.startTime)}</h2>
              <h2 style={{ fontStyle: 'italic' }}>End Time: {printDateTimeString(mostRecent.endTime)}</h2>
              <h2 style={{ fontStyle: 'italic' }}>Location: {mostRecent.location}</h2>
              <p style={{ fontStyle: 'italic' }}>{mostRecent.description}</p>
            </ShadowBox>
          </Container>
        )
      }
      <ShadowBox fluid style={{ padding: '1em 2em', margin: '0px 1em' }}>
        <h3 style={{ textAlign: 'left' }}>More Events</h3>
        <hr style={{ border: '2px solid white', opacity: 1 }}/>
        <Table responsive>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', width: '33%' }}>Event Name</th>
              <th style={{ textAlign: 'center', width: '33%' }}>Event Time</th>
              <th style={{ textAlign: 'right', width: '33%' }}>Event Description</th>
            </tr>
          </thead>
          <tbody>
            {
              events.filter((eventList) => eventList.events.length > 0).map((eventList) => (
                <>
                  <tr>
                    <td colSpan={3} style={{ color: '#DBDBDB' }}>{printDateString(eventList.date)}</td>
                  </tr>
                  {
                    eventList.events.map((event) => 
                      <tr>
                        <td style={{ textAlign: 'left' }}>{event.name}</td>
                        <td style={{ textAlign: 'center' }}>{printTimeString(event.startTime)}</td>
                        <td style={{ textAlign: 'right' }}>
                          <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
                            {event.description}
                          </p>
                          [Click to Read More]
                        </td>
                      </tr>
                    )
                  }
                </>
              ))
            }
          </tbody>
        </Table>
      </ShadowBox>
    </Container>
  )
}

export default Events;