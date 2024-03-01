const express = require("express");
const professionsControllers = require("../controllers/professions");
const routerProfessions = express.Router();

routerProfessions.get("/professions", professionsControllers.listado);

module.exports = routerProfessions;