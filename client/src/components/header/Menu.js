import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import Avatar from '../Avatar';
import NotifyModal from '../NotifyModal';

const Menu = () => {
  const dispatch = useDispatch();
  const { auth, theme, notify } = useSelector(state => state);

  // Links de navegación
  const navLinks = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Search', icon: 'search', onClick: () => {} },
    { label: 'Discover', icon: 'add', onClick: () => dispatch({ type: GLOBALTYPES.STATUS, payload: true }) },
  ];

  return (
    <Nav className="ms-auto d-flex align-items-center gap-3"> {/* <-- ESTA CLASE ALINEA A LA DERECHA */}
      {navLinks.map((link, idx) => (
        <Nav.Item key={idx}>
          <Link
            to={link.path || '#'}
            className="nav-link"
            onClick={(e) => {
              if (link.onClick) {
                e.preventDefault();
                link.onClick();
              }
            }}
          >
            <span className="material-icons">{link.icon}</span>
          </Link>
        </Nav.Item>
      ))}

      {/* Notificaciones */}
      <NavDropdown
        title={
          <span className="material-icons position-relative" style={{ color: notify.data.length > 0 ? 'crimson' : '' }}>
            favorite
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {notify.data.length}
            </span>
          </span>
        }
        id="notify-dropdown"
        align="end"
      >
        <NotifyModal />
      </NavDropdown>

      {/* Avatar del usuario o menú para no autenticado */}
      {auth.user ? (
        <NavDropdown
          title={<Avatar src={auth.user.avatar} size="medium-avatar" />}
          id="user-dropdown"
          align="end"
        >
            <NavDropdown.Item as={Link} to="/postspendientes">posts pendientes</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>

          <NavDropdown.Item onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
            Añadir anuncio
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to={`/profile/${auth.user._id}`}>
            Perfil
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/informacionaplicacion">
            Info app
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => dispatch({ type: GLOBALTYPES.THEME, payload: !theme })}
          >
            {theme ? 'Modo claro' : 'Modo oscuro'}
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/" onClick={() => dispatch(logout())}>
            Desconexión
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <NavDropdown title={<i className="fas fa-user"></i>} id="guest-dropdown" align="end">
            <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/informacionaplicacion">Info app</NavDropdown.Item>

          <NavDropdown.Item as={Link} to="/login">Iniciar sesión</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/register">Registrarse</NavDropdown.Item>
        </NavDropdown>
      )}
    </Nav>
  );
};

export default Menu;
