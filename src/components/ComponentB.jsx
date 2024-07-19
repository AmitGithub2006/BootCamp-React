import React, { useContext } from "react";
// import { NameContext, AgeContext, CityContext } from "../App";
import { MyContext } from "../App";

function ComponentB() {
  // const name = useContext(NameContext);
  // const age = useContext(AgeContext);
  // const city = useContext(CityContext);

  const {name, age, city} = useContext(MyContext);

  return <h2>{name} - {age} - {city}</h2>
}

export default ComponentB;