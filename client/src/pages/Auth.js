import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = location.pathname === LOGIN_ROUTE;
  const navigate = useNavigate();

  // const click = async () => {
  //   try {
  //     let data;
  //     if (isLogin) {
  //       data = await login(email, password);
  //     } else {
  //       data = await registration(email, password);
  //     }
  //     user.setUser(user);
  //     user.setIsAuth(true);
  //     navigate(SHOP_ROUTE, { replace: true });
  //   } catch (e) {
  //     alert(e.response.data.message);
  //   }
  // };
  const click = async () => {
    try {
        let data;
        if (isLogin) {
            data = await login(email, password);
        } else {
            data = await registration(email, password);
        }
        user.setUser(data)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE, { replace: true });
    } catch (e) {
        alert(e)
    }
  } 
  return (
    <Container
      style={{ height: window.innerHeight - 54 }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: "600px" }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email..."
          />
          <Form.Control
            type="password"
            className="mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите password..."
          />
        </Form>
        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
          {isLogin ? (
            <div>
              Нет аккаунта?{" "}
              <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
            </div>
          ) : (
            <div>
              Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
            </div>
          )}
          <div>
            <Button onClick={click} variant="outline-success">
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </div>
        </Row>
      </Card>
    </Container>
  );
});

export default Auth;
