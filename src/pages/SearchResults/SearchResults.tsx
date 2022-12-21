import React, {FC, useEffect} from 'react';
import PageContainer from "../../components/common/PageContainer/PageContainer";
import SearchResultsList from "../../components/common/PostList/SearchResultsList/SearchResultsList";
import {useLocation} from "react-router-dom";
import {usePagination} from "../../context/PaginationContext";
import SearchService from "../../services/searchService";
import Pagination from "../../components/common/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setCardsAction} from "../../store/reducers/selectedCardReducer";
import {IPost} from "../../components/common/PostList/PostItem/PostItem";

const SearchResults: FC = () => {
    const { search } = useLocation();
    const { handleGetPaginationParams, pageResults } = usePagination();

    const query = search.split("?search=")[1];

    const dispatch = useDispatch();

    const handleSearch = async () => {
        await handleGetPaginationParams(SearchService.getSearchResults.bind(null, query));
    }

    const setReduxPosts = (payload: IPost[]) => {
        dispatch(setCardsAction(payload))
    }

    useEffect(() => {
        setReduxPosts(pageResults)
    }, [pageResults])

    useEffect(() => {
        handleSearch()
    }, [search])

    return (
        <PageContainer title={!!query ? `Search Results '${query}'` : ""}>
            <SearchResultsList matches={pageResults} query={query}/>
            <Pagination items={pageResults}/>
        </PageContainer>
    );
};

export default SearchResults;