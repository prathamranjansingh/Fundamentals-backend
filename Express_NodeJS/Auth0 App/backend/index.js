const express = require("express");
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: "https://www.testing-app-api.com",
  issuerBaseURL: "https://dev-7x12ac2q12g8b3qv.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

// enforce on all endpoints
app.use(jwtCheck);

app.get("/challenges", function (req, res) {
  res.json({
    challenge1: "this is the first challenge",
    challenge2: "this is another challenge",
  });
});

app.listen(port);

console.log("Running on port ", port);
