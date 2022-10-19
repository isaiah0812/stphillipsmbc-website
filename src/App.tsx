import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import { IRoute, routes } from './config/routes';
import Footer from './components/footer';

function App() {
  return (
    <Container style={{ minHeight: 'calc(100vh + 10em)', padding: 0, position: 'relative' }} fluid>
      <Menu />
      <Routes>
        {routes.map((route: IRoute) => <Route path={route.path} element={route.component && <route.component />} />)}
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
