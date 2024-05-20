// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney

const express = require("express");
const port = 3000;
const users = [
  {
    name: "pratham",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

const app = express();

app.get("/", (req, res) => {
  const jhonKidneys = users[0].kidneys;
  const numberOfKidneys = jhonKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (jhonKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    jhonKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.use(express.json()); // it is used to parse the json file its a middleware

//To add a new kidney
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    message: "DONE",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true; //it will make all the kidneys healthy
  }
  res.json({});
});

//removing all the unhealthy kidneys

app.delete("/", (req, res) => {
  const newKidneys = [];
  //unhealthy kidney to hona chahiye healthy banane ke liye
  if (atleastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

function atleastOneUnhealthyKidney() {
  let ThereatleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) ThereatleastOneUnhealthyKidney = true;
  }
  return ThereatleastOneUnhealthyKidney;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
