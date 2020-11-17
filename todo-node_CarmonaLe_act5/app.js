const express = require("express");
const port = 3000;
const app = express();
const database = require("./services/db_connection")
const TodoTasks = require("./routes/todoRoutes");
const bodyParser = require("body-parser");

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

app.use(TodoTasks);

database.connect();

app.listen(port, console.log(`Server running on port ${port}`));