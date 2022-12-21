import React, {FC} from 'react';
import {IPost} from "../PostItem/PostItem";
import SearchResultItem from "./SearchResultItem/SearchResultItem";

import styles from "./SearchResultsList.module.css";

interface SearchResultsListProps {
    matches: IPost[]
    query: string
}

const SearchResultsList: FC<SearchResultsListProps> = ({matches = [], query= ""}) => {
    return (
        <div className={styles.searchList}>
            {!!matches.length ? (
                matches.map((post: IPost) => <SearchResultItem key={post.id} {...post}/>)
             ) : (
                 <div className={styles.emptyMatches}>{!query ? "Enter Search Word into Search Field" : `No Results for ${query}`}</div>
            )}
        </div>
    );
};

export default SearchResultsList;