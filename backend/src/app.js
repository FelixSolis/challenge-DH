const express = require("express")
// const router = require("./routes")
const routerA = require("./routes/applicants")
const routerP = require("./routes/professions")
const app = express();

app.listen(10, ()=>{
    console.log("server on port 10")
})

app.use("/", routerA)
app.use("/", routerP)