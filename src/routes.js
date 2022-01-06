import { register } from "./controllers/auth.controller"
const { Router } = require("express")
export const routes = (Router)=>{
    Router.post('/api/register', register)
}
