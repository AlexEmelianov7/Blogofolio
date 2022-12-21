import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responceUtil";


class JwtService {
    static async createAccessToken(email: string, password: string) {
        return await HTTPService.post("https://studapi.teachmeskills.by/auth/jwt/create/", {
            email, password
        })
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    static async updateAccessToken (refresh: string) {
        return await HTTPService.post("https://studapi.teachmeskills.by/auth/jwt/refresh/", {
            refresh
        })
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    static async verifyToken (token: string) {
        return await HTTPService.post("https://studapi.teachmeskills.by/auth/jwt/verify/", {
            token
        })
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}

export default JwtService;