import React, { Component } from 'react';

const RandomRest = () => {
    
    var R = "";

    const rests = [
        "Stellar Coffee Company",
        "Root Cellar",
        "Taco Bell",
        "Cook at home"
    ];
    
    function getRandomRest() {
        const random = Math.floor(Math.random() * rests.length);

        R = rests[random];
        console.log("Random Restaurant is: ", R);
    }

    
    return(
        <div>
          <p>Click on an emoji to view the emoji short name.</p>
          <button className="randomRest-btn" onClick={getRandomRest}>Pick Random Restaurant</button>
          <p>You should go to: {R}</p>
        </div>
      )
}


export default RandomRest