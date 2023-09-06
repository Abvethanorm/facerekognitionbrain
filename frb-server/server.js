const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const database = {
  users: [
    {
      id: "123",
      name: "norm",
      pw: "norm",
      email: "norm",
      count: "0",
      joined: new Date(),
    },
    {
      id: "124",
      name: "molly",
      pw: "molly",
      email: "molly",
      count: "0",
      joined: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.json(database.users);
});

app.post("/signin", (req, res) => {
  req.body.email === database.users[0].email &&
  req.body.pw === database.users[0].pw
    ? res.json("we live baby")
    : res.status(400).json("You not Valid");
});

app.post("/register", (req, res) => {
  const { name, pw, email } = req.body;
  database.users.push({
    id: "125",
    name: name,
    pw: pw,
    email: email,
    count: "0",
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  const user = database.users.find((user) => user.id === id);
  user ? res.json(user) : res.status(404).json("*mic drop* WHO?!?!");
});

app.get("/count", (req, res) => {
  const { id } = req.body;
  const user = database.users.find((user) => user.id === id);
  user.count++
    ? res.json(user.count)
    : res.status(404).json("*mic drop* WHO?!?!");
});

app.listen(3000, () => {
  console.log("we lit");
});
// have to change count to images on the profile
