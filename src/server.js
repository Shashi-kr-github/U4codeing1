const express = require('express');

const connect = require('./config/db');

const UserController = require('./controller/users.controller');

const StudentController = require("./controller/student.controller");
const app = express();
app.use(express.json());

app.use("/users" , UserController)
app.use('/students', StudentController)

const start = async () => {
    await connect();

    app.listen(2244 , () => {
        console.log("listen the port 2244");
    })
}

module.exports = start;