const {
  signpValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");
const { signup, login } = require("../Controllers/AuthController");
const { response } = require("express");
const User = require('../Models/User')

const router = require("express").Router();

router.post("/signup", signpValidation, signup);

router.post("/login", loginValidation, login);

router.get("/getuser/:id", async (req, res) => {
const {id} = req.params;
  const data = await User.findById(id);
  console.log(id);
  res.json({
    data,
  });
});

module.exports = router;
