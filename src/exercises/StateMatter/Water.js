import { useState } from "react";

const Water = () => {
  const [temperature, setTemperature] = useState(18);
  const isSolid = temperature <= 0;
  const isGas = temperature >= 100;
  const stateOfMatter = isSolid ? "Solid" : isGas ? "Gas" : "Liquid";
  const className = isSolid
    ? "state-solid"
    : isGas
    ? "state-gas"
    : "state-liquid";

  const handleChangeInput = (e) => {
    setTemperature(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChangeInput} value={temperature} />
      <p className={`stateOfMatter ${className}`}>
        At {temperature}°C, water is considered to be a<b>"{stateOfMatter}"</b>{" "}
        state of matter.
      </p>
    </div>
  );
};

export default Water;
