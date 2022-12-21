import {responseToJSONHandler} from "../../utils/responceUtil";
import {setMyPostsAction} from "../reducers/myPostsReducer";

export const handleSetMyPost = (image: string, text: string, lesson_num: number, title: string): any => {
    return (dispatch: any) => {
        fetch("https://studapi.teachmeskills.by/blog/posts/", {
            method: "POST",
            body: JSON.stringify({image, text, lesson_num, title}),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(responseToJSONHandler)
            .then(myPost => dispatch(setMyPostsAction(myPost)))
            .catch(console.error)
    }
}