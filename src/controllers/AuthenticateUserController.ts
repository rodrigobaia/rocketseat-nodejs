import {Request, Response} from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserServices";
class AuthenticateUserController{
    async handle(request: Request, response: Response){

        const { code }=request.body;

        const service = new AuthenticateUserService();
        try{
            
            const results = await service.execute(code);

            return response.json(results);
        }
        catch(err){
            return response.json(err.message);
        }
    }
}

export {AuthenticateUserController};