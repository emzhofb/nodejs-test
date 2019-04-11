const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/login", (req, res) => {
  res.send("auth/login");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  // const newPass = bcrypt.hashSync(password, 10);
  // console.log(username, newPass);
  // const hashedPass = bcrypt.compareSync(password, user.password);
});

router.get("/register", (req, res) => {
  res.send("auth/register");
});

router.get("/profile/:id", (req, res) => {
  res.send(`Hello ${id}`);
});

module.exports = router;
