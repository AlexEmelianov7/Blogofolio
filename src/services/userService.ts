import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responceUtil";

export interface IActivateUserBody {
    uid: string,
    token: string
}

class UserService  {
    static async getUser(token: string) {
        return await HTTPService.get("https://studapi.teachmeskills.by/auth/users/me/", {
            "Authorization": `Bearer ${token}`
        })
            .then(responseToJSONHandler)
            .catch(console.log)
    }

    static async activateUser(data: IActivateUserBody) {
        return await HTTPService.post("https://studapi.teachmeskills.by/auth/users/activation/", data)
            .then(res => {
                if (res.ok) {
                    if (data.uid !== ":uid") {
                        window.location.href = '/signup/success'
                    }
                    return res.json()
                } else {
                    throw new Error(res.statusText)
                }
            })
            .catch(console.error)
    }
}

export default UserService;