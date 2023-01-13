const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortunes", getFortune);

const { addFortune } = require('./controller')

app.post("/api/fortunes", addFortune);

const { deleteFortune } = require('./controller')

app.delete("/api/fortunes/deleteIndex", deleteFortune);

const { editFortune } = require('./controller')

app.put("/api/fortunes/editIndex", editFortune);

app.listen(4000, () => console.log("There is Rock 'n' Roll on 4000"));
