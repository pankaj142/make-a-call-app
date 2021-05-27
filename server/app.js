const express = require("express");
const bodyParser = require('body-parser')
const path = require('path');
const cors = require("cors");

const app = express();
const PORT = 4000;

//cors allow
app.use(cors({ origin: 'http://localhost:3000' }));

require('dotenv').config({ path: path.resolve(__dirname, '.env') })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const db = require("./db/config");
// db.sequelize.sync();
db.sequelize
    .sync({ force: false, logging: false })
    .then(() => {
        console.log("DB connected.");
    })
    .catch((err)=>{
        console.log("Error in db connection.",err);
    });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

//Routes
const callsRouter = require("./routes/calls/calls");


app.use("/api", callsRouter);

app.listen(4000, ()=>{
    console.log(`Express Server is running on ${PORT}`)
})