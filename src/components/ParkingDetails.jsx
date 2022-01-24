import React from "react";

const ParkingDetails = ({ name, carName, model, plateNum }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{carName}</h4>
      <h4>{model}</h4>
      <h2 style={{ textTransform: "uppercase" }}>{plateNum}</h2>
    </div>
  );
};

export default ParkingDetails;
