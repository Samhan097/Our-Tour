import React from "react";

function Place(props) {
  const { img, name, price, about } = props;
  return (
    <div>
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>{price}</p>
      <p>{about}</p>
    </div>
  );
}

export default Place;
