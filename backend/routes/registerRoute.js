const express = require("express");
const router = express.Router();

const register = require("../controller/registrationController");

router.post("/", register);

module.exports = router;
