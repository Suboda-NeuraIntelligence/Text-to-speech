const express = require("express");
const {convertTextToSpeech} = require("../controllers/textToSpeechController");
const router = express.Router();

router.post("/", convertTextToSpeech);

module.exports = router;
