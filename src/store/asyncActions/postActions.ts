import {setPostAction} from "../reducers/postReducer";
import {responseToJSONHandler} from "../../utils/responceUtil";

export const handleGetPost = (id: number):any => {
    return (dispatch: any) => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
            .then(responseToJSONHandler)
            .then(post => dispatch(setPostAction(post)))
            .catch(console.error)
    }
}