import express from "express";
import dotnev from "dotenv";
import dbConnection from "./config/db";
import categoriesRoute from "./routes/categoriesRoute";

//const express = require('express')
const app: express.Application = express();
app.use(express.json());
dotnev.config();

dbConnection();

app.get("/", function (req: express.Request, res: express.Response) {
  res.json({ msg: "Hellow API", statuscode: 200 });
});

app.use("/api/v1/categories", categoriesRoute);

app.listen(process.env.PORT, () => {
  console.log(`App is listen on port ${process.env.PORT}`);
});
