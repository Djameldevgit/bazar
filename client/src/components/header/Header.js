import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { Container } from 'react-bootstrap';
 
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <div className="header bg-light shadow-sm">
     <Navbar className="bg-body-tertiary">
        <Container className="d-flex justify-content-between align-items-center">
          
          {/* Logo a la izquierda */}
          <Link to="/" className="navbar-brand text-uppercase p-0 m-0" onClick={() => window.scrollTo({ top: 0 })}>
            <h3 className="m-0">Bazar</h3>
          </Link>

          {/* Menú a la derecha */}
          <Menu />

        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
