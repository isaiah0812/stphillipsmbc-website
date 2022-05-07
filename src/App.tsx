import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import { IRoute, routes } from './routes/route';

function App() {
  return (
    <Container style={{ minHeight: '100vh', padding: 0 }} fluid>
      <Menu />
      <Routes>
        {routes.map((route: IRoute) => <Route path={route.path} element={route.component && <route.component />} />)}
      </Routes>
    </Container>
  );
}

export default App;
