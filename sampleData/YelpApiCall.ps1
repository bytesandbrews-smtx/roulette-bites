$j = Invoke-WebRequest -Headers @{"Authorization" = "Bearer 9nntrke6fVf6C4oEJzpaF2W419UbQR2CojDf_KDnRfKvjIAqwm3aKvifqhVciLrNP72xUiZDh52CVetmBXqbAt_7zO0PiD8PF00RCKRQT5gNaNU0mqnu3FNjZZucY3Yx"} -Method GET `
                  -Uri "https://api.yelp.com/v3/businesses/search?term=restaurants&location=232+N+LBJ+Dr&radius=1609&limit=10" `
                  -ContentType application/json

$j.Content > restaurants.json


