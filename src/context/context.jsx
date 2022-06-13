import React, { createContext, useState } from "react";
import { data } from "../mock/data";

export const CardContext = createContext();

export const Context = ({ children }) => {
  const [state, setState] = useState(data);
  return (
    <CardContext.Provider value={[state, setState]}>
      {children}
    </CardContext.Provider>
  );
};

export default Context;
