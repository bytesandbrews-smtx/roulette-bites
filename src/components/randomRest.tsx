import React, { Component, useState } from 'react';

export default function RandomRest({restData}) {

  const [R, setR] = useState("");
  
  function getRandomRest() {
      const random = Math.floor(Math.random() * restData.length);
      setR(restData[random].name);
  }
  
  return(
      <div>
        <button className="randomRest-btn" onClick={getRandomRest}>Pick Random Restaurant</button>
        <p>You should go to:</p>
        <h2>{R}</h2>
      </div>
    )
}
