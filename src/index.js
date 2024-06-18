require("dotenv").config();
const express = require("express");

const userRoute = require("./routes/userRoute");
const middlelog = require("./middleware/log");
const PORT = process.env.APP_PORT || 6000;

const app = express();

app.use(middlelog);
app.use(express.json());

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server connected: ${PORT}`);
});
