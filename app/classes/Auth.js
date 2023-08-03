import { Tables } from "../types/enums.js";
import { AptContent } from "./AptContent.js";
import Jwt from 'jsonwebtoken'

export class Auth {
    loginUser(userName, Password) {
        const user = new AptContent(process.env.PATH_MDB)
            .filterContent(
                Tables.Alphon,
                [
                    { value: true, field: "isMatrim" },
                    { value: userName, field: "firstName" },
                    { value: Password, field: "id" },
                ]
            )[0];

        if (user) {
            const token = Jwt.sign({
                user: userName,
                code: Password
            }, process.env.TOKEN_KEY, { algorithm: 'HS256' })
            return { user, token };
        }
        return false;
    }

}