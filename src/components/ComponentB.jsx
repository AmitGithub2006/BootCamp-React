import React, { useContext } from "react";
import { NameContext, AgeContext } from "../App";

function ComponentB() {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);

  return <h2>{name} - {age}</h2>
}

export default ComponentB;