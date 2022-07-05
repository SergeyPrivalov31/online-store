import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { check } from "./http/userAPI";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    check().then(data => {
      user.setUser(data)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  },[])

  if(loading){
    return <Spinner animation="grow"/>
  }

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
});

export default App;
