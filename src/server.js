import express from "express";
import api from "./index.js";
const app = express();
const port = 3000;

app.get("/", async (req, res) => res.json(await api()));

app.listen(port, () => console.log(`Example app listening on port 3000!`));
