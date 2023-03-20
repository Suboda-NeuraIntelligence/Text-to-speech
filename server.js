require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/textToSpeech", require("./routes/textToSpeechRoute"));

app.listen(port, () => console.log(`Server is running on port no : ${port}`));
