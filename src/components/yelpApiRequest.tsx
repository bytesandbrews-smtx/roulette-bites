import axios from 'axios';

const config = {
    headers: {
      Authorization:
        "Bearer 9nntrke6fVf6C4oEJzpaF2W419UbQR2CojDf_KDnRfKvjIAqwm3aKvifqhVciLrNP72xUiZDh52CVetmBXqbAt_7zO0PiD8PF00RCKRQT5gNaNU0mqnu3FNjZZucY3Yx",
    },
    params: {
      term: "restaurants",
      location: "232 N LBJ Dr",
      radius: 1609,
      sort_by: "relevance",
      limit: 3,
    },
  };

  axios
  .get("https://api.yelp.com/v3/businesses/search", config)
  .then((response) => {
    console.log(response); //These are the results sent back from the API!
  });

