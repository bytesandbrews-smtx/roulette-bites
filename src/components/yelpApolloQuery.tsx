import React, { Component } from 'react';
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, HttpLink, ApolloProvider, gql, useQuery } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const YelpApolloQuery = () => {
	
	const httpLink = createHttpLink({
	  uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
	  //uri: 'https://api.yelp.com/v3/graphql',
	  //credentials: 'same-origin'
	  //fetchOptions: {
		//mode: 'no-cors',
	  //}
	});
	
	const authLink = setContext((_, { headers }) => {
	  // get the authentication token from local storage if it exists
	  //const token = localStorage.getItem('token');
	  const token = "9nntrke6fVf6C4oEJzpaF2W419UbQR2CojDf_KDnRfKvjIAqwm3aKvifqhVciLrNP72xUiZDh52CVetmBXqbAt_7zO0PiD8PF00RCKRQT5gNaNU0mqnu3FNjZZucY3Yx";
	  // return the headers to the context so httpLink can read them
	  return {
		headers: {
		  ...headers,
		  authorization: token ? `Bearer ${token}` : "",
		  "content-type": "application/json"
		}
	  }
	});
	
	const client = new ApolloClient({
	  link: authLink.concat(httpLink),
	  cache: new InMemoryCache()
	});

	const GET_RESTAURANTS = gql`
		query getRestaurants {
			search(term: "restaurants", location: "232 N LBJ Dr", radius: 1609, limit: 3 ) {
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
		}
  	`;

	function DisplayLocations() {
		const { loading, error, data } = useQuery(GET_RESTAURANTS);
	
		if (loading) return <p>Loading...</p>;
		if (error) return <p>Error : {error.message}</p>;
		return (data);
	}

	return (<p>Potato</p>);

  /*
	return data.locations.map(({ id, name, description, photo }) => (
	  <div key={id}>
		<h3>{name}</h3>
		<img width="400" height="250" alt="location-reference" src={`${photo}`} />
		<br />
		<b>About this location:</b>
		<p>{description}</p>
		<br />
	  </div>
	));
  }
  */

  //return (DisplayLocations());
}

export default YelpApolloQuery
