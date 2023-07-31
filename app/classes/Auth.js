import { AptContent } from "./AptContent.js";
import Jwt from 'jsonwebtoken'

export class Auth {
    loginUser(userName, Password) {
        const users = new AptContent(process.env.PATH_MDB).search("Alphon", true, "isMatrim");
        console.log(users);
        const user = users.find(u => u.id === Password && u.firstName === userName);
        if (user) {
           const token = Jwt.sign({
                user: userName,
                code: Password
            }, process.env.TOKEN_KEY, { algorithm: 'HS256' })
            return token;
        }
        return false;
    }
    
}