import { useState } from "react";
import "./styles.css";

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
    <section className="water">
      <input
        type="text"
        className="water__input"
        onChange={handleChangeInput}
        value={temperature}
      />
      <p className={`water__text ${className}`}>
        At {temperature}°C, water is considered to be a<b>"{stateOfMatter}"</b>{" "}
        state of matter.
      </p>
    </section>
  );
};

export default Water;
