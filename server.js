'use strict'
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const axios = require('axios');
const mongoose = require("mongoose");
app.use(express.json());
const {getDataAbi,getOwnFlower,createFlower,deleteFlower,updateFlower} = require ('./controler/flower.controler')


const MONGO_DB = process.env.MONGO_DB
const PORT=process.env.PORT

mongoose.connect(MONGO_DB)


app.get("/flowerapi", getDataAbi);
app.get("/flower", getOwnFlower);
app.post("/flower", createFlower);
app.delete("/flower/:_id", deleteFlower);
app.put("/flower/:_id",updateFlower)
    






app.listen(PORT)