require("dotenv").config();
const express = require("express");
const twilio = require("twilio")(process.env.SID, process.env.AUTH_TOKEN);
const app = express();

let wholemessage = {
  from: process.env.PHONE_NUMBER,
  to: "+8801602906518",
  username: "taudik",
  body: "hello taufik how are you",
};

app.post("/sms", () => {
  twilio.messages
    .create(wholemessage)
    .then((data) => {
      console.log("send data");
    })
    .then((error) => {
      console.log(error);
    });
});
app.listen(5000, () => {
  console.log("server in running on port 5000");
});
