import React from "react";
import { useHistory } from "react-router-dom";
import Client from "../components/client";

export const Root = () => {
  let history = useHistory();
  console.log(history);
  return <Client />;
};

export default Root;
