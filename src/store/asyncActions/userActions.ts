import {setUserAction} from "../reducers/userReducer";
import UserService from "../../services/userService";
import JwtService from "../../services/jwtService";

export const handleUserSignUp = (email: string, password: string, username: string, callback: () => void) => {
    return (dispatch: any) => {
        fetch("https://studapi.teachmeskills.by/auth/users/", {
            method: "POST",
            body: JSON.stringify({email, password, username}),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error(res.statusText)
                }
            })
            .then(user => dispatch(setUserAction(user)))
            .then(() => callback())
            .catch(console.error)
    }
}

export const handleGetUser = (accessToken: string, refreshToken: string) => {
    return (dispatch: any) => {
        UserService.getUser(accessToken)
            .then(user => {
                if (!!user) {
                    dispatch(setUserAction(user))
                }
            })
            .catch(() => {
                if (!!refreshToken) {
                    JwtService.updateAccessToken(refreshToken)
                        .then(token => {
                            if (typeof token === "object") {
                                localStorage.setItem("access", token.access)
                                return UserService.getUser(token.access)
                            }
                        })
                        .then(user => {
                            if (typeof user === "object") {
                                dispatch(setUserAction(user))
                            }
                        })
                } else {
                    throw new Error("error")
                }
            })
    }
}
