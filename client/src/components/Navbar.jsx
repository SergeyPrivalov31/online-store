import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { Context } from "..";
import { SHOP_ROUTE } from "../utils/consts";

const NavbarComponent = observer(() => {
    const {user} = useContext(Context)
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE} >Device Shop</NavLink>
          {user.isAuth 
          ?  <Nav className="ml-auto">
              <Button  variant="outline-light">Админ панель</Button>
              <Button style={{marginLeft:'4px'}} variant="outline-light" >Войти</Button>
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
