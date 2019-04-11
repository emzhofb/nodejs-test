const express = require("express");
const router = express.Router();

router.get("/findnumber", (req, res) => {
  const { phone } = req.body;
  res.send(phone);
});

module.exports = router;
