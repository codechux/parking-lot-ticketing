import React, { useState, useContext } from "react";
import ParkingDetails from "./ParkingDetails";
import { RegisterContext } from "./RegisterContext";

const Details = () => {
  const [list, setList] = useContext(RegisterContext);
  return (
    <div>
      {list.map((carD) => (
        <div>
          <ParkingDetails
            name={carD.name}
            carName={carD.carName}
            model={carD.model}
            plateNum={carD.plateNum}
          />
        </div>
      ))}
    </div>
  );
};

export default Details;
