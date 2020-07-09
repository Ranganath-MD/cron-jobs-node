const express = require("express")
const port = 5000
const app = express()
const cron = require("node-cron");
const fs = require("fs");


// schedule the function at every minute
const printMessage = () => {
    console.log("running a task every minute");
}
cron.schedule("* * * * *", () => printMessage());

// Run the function at every second
const printTime = () => {
    console.log(new Date().getSeconds())
}
cron.schedule("* * * * * *", () => printTime());

// Run the function at every 2 seconds
const sendMessge = () => {
    console.log("Dont panic, cron job is running the message")
}
cron.schedule("*/2 * * * * *", () => sendMessge());

// Using names
cron.schedule('* * * July,September Thursday', () => {
    console.log('running on Thursday(every minute) of July and September');
});

//
var task = cron.schedule('* * * * * *', () => {
    console.log('stoped task');
}, {
    scheduled: false
});
// task.start();
task.stop();

//validate cron jobs
var job1 = cron.validate('59 * * * *');
var job2 = cron.validate('60 * * * *');
console.log(job1, job2)     // true false

app.listen(port, () => {
    console.log("Hey I am listening to u on", port)
})