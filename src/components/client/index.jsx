import React, { useContext } from "react";
import Card from "../card";
import { Container } from "./style";
import { CardContext } from "../../context/context";

export const Client = () => {
  const [state] = useContext(CardContext);
  return (
    <Container>
      {state.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </Container>
  );
};

export default Client;
