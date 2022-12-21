import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responceUtil";

export default class SortPostsService {
    static async getSortedPosts (ordering: string = "") {
        return await HTTPService.get(`https://studapi.teachmeskills.by/blog/posts?ordering=${ordering}`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}