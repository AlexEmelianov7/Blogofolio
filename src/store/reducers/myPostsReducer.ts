import {Reducer} from "redux";
import {IPost} from "../../components/common/PostList/PostItem/PostItem";

enum MyPostsActions {
    SET_MY_POSTS = "SET_MY_POSTS"
}

interface IInitialState {
    myPosts: IPost[]
}

const initialState: IInitialState = {
    myPosts: []
}

export const myPostsReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case MyPostsActions.SET_MY_POSTS:
            return { ...state, myPosts: action.payload }
        default:
            return state
    }
}

export const setMyPostsAction = (payload: any) => ({type: MyPostsActions.SET_MY_POSTS, payload});
