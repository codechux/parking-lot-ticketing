import React, { useState, createContext } from "react";

export const RegisterContext = createContext();

export const DetailsProvider = (props) => {
  const [list, setList] = useState([
    {
      name: "",
      carName: "",
      model: "",
      PlateNUm: "",
    },
  ]);
  return (
    <RegisterContext.Provider value={[list, setList]}>
      {props.children}
    </RegisterContext.Provider>
  );
};
