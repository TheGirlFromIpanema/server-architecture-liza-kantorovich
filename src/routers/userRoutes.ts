import {IncomingMessage, ServerResponse} from "node:http";
import {UserController} from "../controllers/UserController{.ts";

export const userRouters=
    async (req:IncomingMessage, res:ServerResponse, controller:UserController) => {
    const {url, method} = req;
    const parsedUrl = new URL(url!, "http://localhost:3005")

    switch (parsedUrl.pathname + method) {
        case "/api/users" + "POST":{
            await controller.addUser(req, res);
            break;
        }
        case "/api/users" + "GET":{
            controller.getAllUsers(req,res);
            break;
        }
        case "/api/users" + "DELETE":{
            await controller.removeUser(req,res);
            break;
        }
        case "/api/users" + "PUT":{
            await controller.updateUser(req,res);
            break;
        }
        case "/api/user" + "GET":{
            const id = parsedUrl.searchParams.get('userId');
            controller.getUser(req,res,id)
            break;
        }
        case '/api/logger' + 'GET': {
            controller.getAllLogs(req,res)
            break;
        }
        //ToDo cases

        default: {
            res.writeHead(404, {"Content-Type":"text/plain"})
            res.end("Page not found")
        }
    }
}