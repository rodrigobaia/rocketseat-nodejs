
import "dotenv/config";
import express, { json, request, response } from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);
app.get("/github", (request,response) =>{
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENTE_ID}`);
});


app.get("/sign/callback", (request,response)=>{
    const {code} = request.query;

    return response.json(code);
});
app.listen(4000, ()=>console.log('Server listner port 4000'));