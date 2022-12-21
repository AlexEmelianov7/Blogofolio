import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {selectedCardReducer} from "./reducers/selectedCardReducer";
import {userReducer} from "./reducers/userReducer";
import {postReducer} from "./reducers/postReducer";
import {myPostsReducer} from "./reducers/myPostsReducer";

const rootReducer = combineReducers({
    selectedCard: selectedCardReducer,
    user: userReducer,
    post: postReducer,
    myPosts: myPostsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));