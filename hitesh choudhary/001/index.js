require('dotenv').config()

// import express from express
const express = require('express')

const app = express()
// const port;

const git_inf = {
  "login": "mightysimran",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mightysimran",
  "html_url": "https://github.com/mightysimran",
  "followers_url": "https://api.github.com/users/mightysimran/followers",
  "following_url": "https://api.github.com/users/mightysimran/following{/other_user}",
  "gists_url": "https://api.github.com/users/mightysimran/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mightysimran/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mightysimran/subscriptions",
  "organizations_url": "https://api.github.com/users/mightysimran/orgs",
  "repos_url": "https://api.github.com/users/mightysimran/repos",
  "events_url": "https://api.github.com/users/mightysimran/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mightysimran/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Simran Kaur",
  "company": null,
  "blog": "",
  "location": "The Himalayas",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
}

app.get('/', (req, res) => {
  res.send('Hello, world.')
})

app.get("/user", (req, res) => {
    res.send("mightysimran")
})

app.get("/github", (req, res) => {
    res.json(git_inf)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.PORT, () => {
  console.log(`Listenin' on port ${process.env.PORT}`)
})

// -> localhost:port after npm run start in terminal
// -> How to deploy smth in production (prod) is discussed at 1:00:00