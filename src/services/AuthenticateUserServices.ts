import axios from "axios";
/**
 *  Recber o cde (string)
 *  Recuperar o access_token no github
 *  Verificar se o usuário existe no banco
 *      se ele existir gera um token
 *      se nao Cria o usuario e gera um token
 * 
 * Retorna o token com as infor d ouser logado
 * 
**/

class AuthenticateUserService{
    async execute(code: string){
        const url = "https://github.com/login/oauth/access_token";

        const response = axios.post(url,null,{
            params:{
                client_id:process.env.GITHUB_CLIENTE_ID,
                client_secret:process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers:{
                "Accept": "application/json"
            }

        });

        return (await response).data;
    }
}

export{AuthenticateUserService};