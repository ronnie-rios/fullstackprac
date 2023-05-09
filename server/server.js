const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 9922;

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

app.listen(PORT, console.log(`server is running on ${PORT}`));