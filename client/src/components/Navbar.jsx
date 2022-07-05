import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { Context } from "..";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const NavbarComponent = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE} >Device Shop</NavLink>
          {user.isAuth 
          ?  <Nav className="ml-auto">
              <Button onClick={() => navigate(ADMIN_ROUTE, { replace: true })}  variant="outline-light">Админ панель</Button>
              <Button onClick={() => navigate(LOGIN_ROUTE, { replace: true })} style={{marginLeft:'4px'}} variant="outline-light" >Выйти</Button>
            </Nav>
          :  <Nav className="ml-auto">
              <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>}
        </Container>
      </Navbar>
    </div>
  );
});

export default NavbarComponent;
