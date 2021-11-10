import {Request, Response} from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserServices";
class AuthenticateUserController{
    async handle(request: Request, response: Response){

        const { code }=request.body;

        const service = new AuthenticateUserService();
        const results = await service.execute(code);

        return response.json(results);
    }
}

export {AuthenticateUserController};