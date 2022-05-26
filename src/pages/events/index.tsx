import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { SPButton } from '../../components/button';
import { Header, Divide, ShadowBox } from '../../components/styledComponents';

const Events = (): JSX.Element => {
  return (
    <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em' }}>
      <Header style={{ transform: 'translate(0px, 10%)' }}>Upcoming Events</Header>
      <Divide width="5%"/>
      <Container fluid style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
        <Container className="square" style={{ width: '40%', backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1em 1em 1em 0px' }}>
          Google
        </Container>
        <ShadowBox fluid style={{ textAlign: 'left', margin: '1em 0px 1em 1em', padding: '1em' }}>
          <h1 style={{ fontSize: '3em' }}>Next Event: A Church Service Where People Do Church</h1>
          <h2 style={{ fontStyle: 'italic' }}>Time: Wednesday, July 28, 2021, 6:05 PM</h2>
          <h2 style={{ fontStyle: 'italic' }}>Location: 123 ABC Street, Austin, TX, 78725</h2>
          <p style={{ fontStyle: 'italic' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            in hac habitasse platea dictumst vestibulum rhoncus est. Tortor
            vitae purus faucibus ornare suspendisse sed nisi lacus. Mi proin sed
            libero enim sed. Lectus sit amet est placerat in egestas erat.
          </p>
        </ShadowBox>
      </Container>
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
            <tr>
              <td colSpan={3} style={{ color: '#DBDBDB' }}>Thursday, August 12, 2021</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Another Church Service For Church</td>
              <td style={{ textAlign: 'center' }}>11:00 AM</td>
              <td style={{ textAlign: 'right' }}>
                <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                  non sodales neque sodales. Scelerisque viverra mauris in
                  aliquam. Vulputate eu scelerisque felis imperdiet proin
                  fermentum leo. Eget gravida cum sociis natoque penatibus et.
                </p>
                [Click to Read More]
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Another Church Service For Church</td>
              <td style={{ textAlign: 'center' }}>3:00 PM</td>
              <td style={{ textAlign: 'right' }}>
                <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                  non sodales neque sodales. Scelerisque viverra mauris in
                  aliquam. Vulputate eu scelerisque felis imperdiet proin
                  fermentum leo. Eget gravida cum sociis natoque penatibus et.
                </p>
                [Click to Read More]
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Another Church Service For Church</td>
              <td style={{ textAlign: 'center' }}>7:00 PM</td>
              <td style={{ textAlign: 'right' }}>
                <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                  non sodales neque sodales. Scelerisque viverra mauris in
                  aliquam. Vulputate eu scelerisque felis imperdiet proin
                  fermentum leo. Eget gravida cum sociis natoque penatibus et.
                </p>
                [Click to Read More]
              </td>
            </tr>
            <tr>
              <td colSpan={3} style={{ color: '#DBDBDB' }}>Sunday, August 15, 2021</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Another Church Service For Church</td>
              <td style={{ textAlign: 'center' }}>11:00 AM</td>
              <td style={{ textAlign: 'right' }}>
                <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                  non sodales neque sodales. Scelerisque viverra mauris in
                  aliquam. Vulputate eu scelerisque felis imperdiet proin
                  fermentum leo. Eget gravida cum sociis natoque penatibus et.
                </p>
                [Click to Read More]
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Another Church Service For Church</td>
              <td style={{ textAlign: 'center' }}>3:00 PM</td>
              <td style={{ textAlign: 'right' }}>
                <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                  non sodales neque sodales. Scelerisque viverra mauris in
                  aliquam. Vulputate eu scelerisque felis imperdiet proin
                  fermentum leo. Eget gravida cum sociis natoque penatibus et.
                </p>
                [Click to Read More]
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Another Church Service For Church</td>
              <td style={{ textAlign: 'center' }}>7:00 PM</td>
              <td style={{ textAlign: 'right' }}>
                <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                  non sodales neque sodales. Scelerisque viverra mauris in
                  aliquam. Vulputate eu scelerisque felis imperdiet proin
                  fermentum leo. Eget gravida cum sociis natoque penatibus et.
                </p>
                [Click to Read More]
              </td>
            </tr>
            <tr>
              <td colSpan={3} style={{ color: '#DBDBDB' }}>Sunday, August 22, 2021</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Another Church Service For Church</td>
              <td style={{ textAlign: 'center' }}>11:00 AM</td>
              <td style={{ textAlign: 'right' }}>
                <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                  non sodales neque sodales. Scelerisque viverra mauris in
                  aliquam. Vulputate eu scelerisque felis imperdiet proin
                  fermentum leo. Eget gravida cum sociis natoque penatibus et.
                </p>
                [Click to Read More]
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Another Church Service For Church</td>
              <td style={{ textAlign: 'center' }}>3:00 PM</td>
              <td style={{ textAlign: 'right' }}>
                <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                  non sodales neque sodales. Scelerisque viverra mauris in
                  aliquam. Vulputate eu scelerisque felis imperdiet proin
                  fermentum leo. Eget gravida cum sociis natoque penatibus et.
                </p>
                [Click to Read More]
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Another Church Service For Church</td>
              <td style={{ textAlign: 'center' }}>7:00 PM</td>
              <td style={{ textAlign: 'right' }}>
                <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                  non sodales neque sodales. Scelerisque viverra mauris in
                  aliquam. Vulputate eu scelerisque felis imperdiet proin
                  fermentum leo. Eget gravida cum sociis natoque penatibus et.
                </p>
                [Click to Read More]
              </td>
            </tr>
          </tbody>
        </Table>
      </ShadowBox>
    </Container>
  )
}

export default Events;