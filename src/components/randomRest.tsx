import React, { Component, useState } from 'react';

export default function RandomRest({restData}) {

  const [R, setR] = useState({'name': '', 'price': '', 'image_url' : ''});
  
  function getRandomRest() {
      const random = Math.floor(Math.random() * restData.length);
      setR(restData[random]);
  }

  function getPrices() {
    const noPricing = restData.filter(rest => !rest.hasOwnProperty('price')).length
    return(
    <>
      <label htmlFor="filterPrice">Pricing: </label>
      <select id="filterPrice" multiple>
        <option value="$" selected>$: {restData.filter(rest => rest.price === '$').length + noPricing}</option>
        <option value="$$" selected>$$: {restData.filter(rest => rest.price === '$$').length}</option>
        <option value="$$$" selected>$$$: {restData.filter(rest => rest.price === '$$$').length}</option>
        <option value="$$$$" selected>$$$$: {restData.filter(rest => rest.price === '$$$$').length}</option>
      </select>
    </>
    )
  }
  
  return(
      <div>
        {getPrices()}
        <br></br>
        <button className="randomRest-btn" onClick={getRandomRest}>Pick Random Restaurant</button>
        <p>You should go to:</p>
        <h2>{R.name}</h2>
        <p>{R.price ? R.price : '$'}</p>
        <img src={R.image_url} width="400px" height="auto"></img>
      </div>
    )
}
