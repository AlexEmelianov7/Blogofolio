import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responceUtil";
import {IPost} from "../components/common/PostList/PostItem/PostItem";

export interface SearchResults {
    count: number,
    next: string | null,
    previous: string | null,
    results: IPost[]
}

class SearchService {
    static async getSearchResults (search: string = "", limit: number = 6, offset: number = 0) {
        return await HTTPService.get(`https://studapi.teachmeskills.by/blog/posts?search=${search}&limit=${limit}&offset=${offset}`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    static async getSearchPage(url: string): Promise<SearchResults> {
        return await HTTPService.get(url).then(responseToJSONHandler).catch(console.error)
    }
}

export default SearchService;