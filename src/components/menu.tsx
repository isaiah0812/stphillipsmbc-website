import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { IRoute, routes } from '../config/routes';

interface MenuItemProps {
  route: IRoute,
  onClick: () => any
}

const MenuItem = ({ route, onClick }: MenuItemProps) => {
  const { path, title } = route;
  const [borderColor, setBorderColor] = useState('transparent')

  const hover = () => setBorderColor('black');
  const leave = () => setBorderColor('transparent');

  return (
    <Link
      to={path}
      onMouseEnter={hover} 
      onMouseLeave={leave}
      onClick={() => {
        onClick();
        window.scroll({ top: 0, behavior: 'smooth' })
      }}
      style={{
        textDecoration: 'none',
        color: 'black',
        fontSize: '2em',
        width: '100%',
        border: `1px solid ${borderColor}`,
        transition: 'border 0.3s',
        padding: '.25em .5em'
      }}
    >
      {title}
    </Link>
  )
}

const Menu = () => {
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  return (
    <React.Fragment>
      <Navbar
        fixed="top"
        style={{
          background: 'linear-gradient(to bottom, rgba(80, 9, 9, 1), rgba(154, 144, 4, 0))',
          height: '5em',
          width: '100%',
          zIndex: 2,
          padding: '0.3em'
        }}
      >
        <Container fluid style={{ display: 'flex', width: '100%', height: '5em', alignItems: 'center' }}>
          <Navbar.Brand href="/" style={{ padding: 0 }}>
            <h3>SPMBC</h3>
            <h5 style={{ fontStyle: 'italic' }}>The Church That Looks to the Hills.</h5>
          </Navbar.Brand>
          <FontAwesomeIcon icon={faBars} onClick={open} style={{ height: '3em', cursor: 'pointer' }} />
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={close} placement="end" style={{ width: '100%', maxWidth: 500 }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ width: '100%', padding: 0, display: 'flex', flexDirection: 'column' }}>
          {routes.map((route: IRoute) => <MenuItem route={route} onClick={close} />)}
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}

export default Menu;