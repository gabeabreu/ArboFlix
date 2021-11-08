import React from "react";
import OnBoarding from "./src/screens/OnBoarding";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";

export default function App() {
  var logged = true;
  var firstTime = false;

  function changeBoarding() {
    return (firstTime = !firstTime);
  }

  function login() {
    return (logged = !logged);
  }

  if (logged == false) return <Login />;
  else {
    if (firstTime == true) return <OnBoarding />;
    else return <Home />;
  }

  return <OnBoarding />;
}
