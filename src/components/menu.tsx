import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { IRoute, routes } from '../config/routes';

const MenuItem = ({ path, title }: IRoute) => {
  const [borderColor, setBorderColor] = useState('transparent')

  const hover = () => setBorderColor('black');
  const leave = () => setBorderColor('transparent');

  return (
    <Nav.Link
      href={path}
      onMouseEnter={hover} 
      onMouseLeave={leave} 
      style={{
        textDecoration: 'none',
        color: 'black',
        fontSize: '2em',
        width: '100%',
        border: `1px solid ${borderColor}`,
        transition: 'border 0.3s'
      }}
    >
      {title}
    </Nav.Link>
  )
}

const Menu = () => {
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  return (
    <React.Fragment>
      <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', height: '8vh', width: '100%', zIndex: 1, padding: '0.3em' }} fixed="top">
        <Container fluid style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <Navbar.Brand href="/" style={{ padding: 0 }}>
            <h3>SPMBC</h3>
            <h5>The Church that looks to the hills.</h5>
          </Navbar.Brand>
          <FontAwesomeIcon icon={faBars} onClick={open} style={{ height: '3em', cursor: 'pointer' }} />
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={close} placement="end" style={{ width: '100%', maxWidth: 500 }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ width: '100%', padding: 0 }}>
          {routes.map((route: IRoute) => <MenuItem path={route.path} title={route.title} />)}
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}

export default Menu;