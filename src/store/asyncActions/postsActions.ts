import {setCardsAction} from "../reducers/selectedCardReducer";
import {responseToJSONHandler} from "../../utils/responceUtil";

export const handleGetPosts = ():any => {
    return (dispatch: any) => {
        fetch("https://studapi.teachmeskills.by/blog/posts/?limit=11")
            .then(responseToJSONHandler)
            .then(posts => dispatch(setCardsAction(posts.results)))
            .catch(console.error)
    }
}