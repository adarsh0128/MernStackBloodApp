const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");
const cron = require("node-cron");
dotenv.config();

// SERVER
const PORT = process.env.PORT;

// SCHEDULE TASK

const run = () => {
  cron.schedule("* * * * * *", () => {
    sendDetailsProspectEmail();
    sendEligibilityEmail();
    sendBloodDonationReminder();
    sendDonorDetailsEmail();
  });
};

run();

app.listen(8001, () => {
  console.log(`Backgroundservices is running on 8001`);
  dbConnection();
});
