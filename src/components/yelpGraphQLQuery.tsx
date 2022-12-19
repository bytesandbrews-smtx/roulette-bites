import React, { Component } from 'react';
import axios from 'axios';

const YelpGraphQLQuery = () => {
	const options = {
		method: 'POST',
		url: 'https://api.yelp.com/v3/graphql',
		headers: {
			"Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": "Bearer 9nntrke6fVf6C4oEJzpaF2W419UbQR2CojDf_KDnRfKvjIAqwm3aKvifqhVciLrNP72xUiZDh52CVetmBXqbAt_7zO0PiD8PF00RCKRQT5gNaNU0mqnu3FNjZZucY3Yx"
		},
		data: {
			query: `{
          search(term: "restaurants", location: "232 N LBJ Dr", radius: 1609, sort_by: "relevance", limit: 3 ) {
              business{
                  name
                  id
                  alias
                  rating
                  review_count
                  url
                  photos
              }
          } 
      }`
		}
	};
	axios
		.request(options)
		.then(function (response) {
			const res = response.data; // Response received from the API
		})
		.catch(function (error) {
			console.error(error);
		});

    return (<p>[Results of yelpGraphQLQuery function]</p>);
}

export default YelpGraphQLQuery