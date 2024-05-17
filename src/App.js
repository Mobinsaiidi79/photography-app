import React from "react";
import  routes  from "./routes";
import { Link, useRoutes } from "react-router-dom";
import Header from "./component/Header/Header";

export default function App() {
  let router = useRoutes(routes);

  return (
    <>
      <Header/>
      {router}
    </>
  );
}
