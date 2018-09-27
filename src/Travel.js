import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <h1>{destination}</h1>
    <h3>{country}</h3>
    <img src={photo} alt={destination} />
    <figcaption>{distance}</figcaption>
  </figure>
);

export default Travel;