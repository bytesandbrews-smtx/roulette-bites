import "./App.css";

import React, { useState } from "react";

import useConfig from "./components/useConfig";
import restData from "../public/restaurants.json";

import RandomRest from "./components/randomRest";
//import YelpAPIRequest from "./components/yelpApiRequest";
//import YelpGraphQLQuery from "./components/yelpGraphQLQuery";
//import YelpApolloQuery from "./components/yelpApolloQuery";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();

  //console.log(restData);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
      </header>
      <div className="App-body">
        <RandomRest/>
      </div>
    </div>
  );
}
