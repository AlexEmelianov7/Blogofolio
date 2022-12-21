import {Reducer} from "redux";
import {IPost} from "../../components/common/PostList/PostItem/PostItem";


enum PostActions {
    SET_POST = "SET_POST",
}

interface IInitialState {
    post: IPost | null
}

const initialState: IInitialState = {
    post: null
}

export const postReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case PostActions.SET_POST:
            return { post: action.payload }
        default:
            return state
    }
}

export const setPostAction = (payload: any) => ({type: PostActions.SET_POST, payload});