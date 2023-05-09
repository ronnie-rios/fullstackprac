const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 9922;


require("./config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const TodoRoutes = require('./routes/todo.routes');
TodoRoutes(app);

app.listen(PORT, console.log(`server is running on ${PORT}`));