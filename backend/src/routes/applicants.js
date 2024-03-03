const express = require("express");
const appliContro = require("../controllers/applicants");
const applicantsControllers = require("../controllers/applicants");
const routerApplicants = express.Router();

routerApplicants.get("/applicants", applicantsControllers.listado);
routerApplicants.get("/applicants/:id", applicantsControllers.detail);

module.exports = routerApplicants;