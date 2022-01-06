const { Router } = require("express");
const express= require("express");
// const { register } = require("./src/controllers/auth.controller");
const { routes } = require("./src/routes");
const app = express();
app.use(express.json());

routes(app);
// app.get('/register', (req, res)=>{
//     const body = req.body;
//     res.send(body);
// })
app.listen(8000, ()=>{
    console.log("App is connected to express,");
})