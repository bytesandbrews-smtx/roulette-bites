import React, { Component, useState } from 'react';

export default function RandomRest() {

  const rests = [
      "Stellar Coffee Company",
      "Root Cellar",
      "Taco Bell",
      "Cook at home"
  ];

  const [R, setR] = useState("");
  
  function getRandomRest() {
      const random = Math.floor(Math.random() * rests.length);
      setR(rests[random]);
  }
  
  return(
      <div>
        <button className="randomRest-btn" onClick={getRandomRest}>Pick Random Restaurant</button>
        <p>You should go to:</p>
        <h2>{R}</h2>
      </div>
    )
}
