import React from "react";
// src/Travels.js
import Travel from "./Travel"
const travels = [
  {       
    destination : "New York",
    country : "America",
    photo : "https://media.routard.com/image/10/5/new-york.1468105.w740.jpg",
    distance : "The distance from France to New York is equal to 5834 km."
  },
  {
    destination : "Dubaï",
    country : "Dubaï",
    photo : "https://www.wolfestone.co.uk/wp-content/uploads/2015/07/Dubai-at-Night.png",
    distance : "The distance from France to Dubaï is equal to 6 930 km."
  },
  {
    destination : "Amsterdam",
    country : " Pays-Bas ",
    photo : "https://busticket4.me/db_assets/images/blog_cover/amsterdam-98587-750x250.jpg",
    distance : "The distance from France to Amsterdam is equal to 517 km."
  },
  {
    destination : "Tokyo",
    country : "Japan",
    photo : "https://www.cambridgeconsultants.com/sites/default/files/styles/embedded_image/public/ccims_37286442537-1024x341.jpg?itok=RHpAmy11",
    distance : "The distance from France to Tokyo is equal to 9 956 km."
  },
  {
    destination : "Moscow",
    country : "Russia",
    photo : "https://www.moneylaundering.com/wp-content/uploads/2018/08/Moscow-750x250.jpg",
    distance : "The distance from France to Moscow is equal to 2 836 km."
  },
];

const Travels = () =>(
  <div>
    {travels.map(travel =>(
    <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
    ))}
  </div>
);

export default Travels;