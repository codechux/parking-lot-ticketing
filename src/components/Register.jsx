import React, { useState, useContext } from "react";
import { RegisterContext } from "./RegisterContext";

const Register = () => {
  const [name, setName] = useState("");
  const [carName, setCarName] = useState("");
  const [model, setModel] = useState("");
  const [plateNum, setPlateNum] = useState("");
  const [list, setList] = useContext(RegisterContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateCarName = (e) => {
    setCarName(e.target.value);
  };

  const updateModel = (e) => {
    setModel(e.target.value);
  };

  const updatePlateNum = (e) => {
    setPlateNum(e.target.value);
  };

  const addRegister = (e) => {
    e.preventDefault();
    setList((newList) => [
      ...newList,
      { name: name, carName: carName, model: model, plateNum: plateNum },
    ]);
  };
  return (
    <div className="register">
      <form className="form" onSubmit={addRegister}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name name here"
          value={name}
          onChange={updateName}
        />
        <label htmlFor="carName">Car Name</label>
        <input
          type="text"
          name="carName"
          placeholder="Enter your car name"
          value={carName}
          onChange={updateCarName}
        />
        <label htmlFor="model">Model</label>
        <input
          type="text"
          name="model"
          placeholder="Your car model"
          value={model}
          onChange={updateModel}
        />
        <label htmlFor="plateNum">Plate Number</label>
        <input
          type="text"
          name="plateNum"
          placeholder="Enetr your plate number"
          value={plateNum}
          onChange={updatePlateNum}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
