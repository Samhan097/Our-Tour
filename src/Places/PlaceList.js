import React from "react";
import { data } from "./data";
import Place from "./Place";

const newPlace = data.map((place) => {
  return <Place key={place.id} {...place}></Place>;
});

function PlaceList() {
  return <div className="placelist">{newPlace}</div>;
}

export default PlaceList;
