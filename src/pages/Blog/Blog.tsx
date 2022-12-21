import React, {FC, useContext, useEffect, useState} from 'react';

import PostList from "../../components/common/PostList/PostList";
import Tabs from "../../components/common/Tabs/Tabs";
import {PageProps} from "../../types/pageProps";
import PageContainer from "../../components/common/PageContainer/PageContainer";
import {useDispatch, useSelector} from "react-redux";
import {IPost} from "../../components/common/PostList/PostItem/PostItem";
import {usePagination} from "../../context/PaginationContext";
import PostsService from "../../services/postsService";
import Pagination from "../../components/common/Pagination/Pagination";
import {setCardsAction} from "../../store/reducers/selectedCardReducer";
import SortPostsService from "../../services/sortPostsService";
import {useLocation} from "react-router-dom";
import {useScreenWidth} from "../../context/ScreenWidthContext";
import PostListAdaptive from "../../components/common/PostList/PostListAdaptive/PostListAdaptive";

const TABS_CONFIG = [
    {
        id: 1,
        title: "All"
    },
    {
        id: 2,
        title: "My favorites"
    },
    {
        id: 3,
        title: "My posts"
    },
]

const Blog: FC<PageProps> = ({title = ""}) => {
    const dispatch = useDispatch();
    const { isDesktopView } = useScreenWidth();

    const [activeTabItem, setActiveTabItem] = useState(TABS_CONFIG[0].id);

    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

    const [posts, setPosts] = useState<IPost[]>([]);

    const { cards } = useSelector((state: any) => state.selectedCard);
    const { myPosts } = useSelector((state: any) => state.myPosts);

    const { search } = useLocation();

    const {handleGetPaginationParams, pageResults, activePage} = usePagination();

    const ordering = search.split("?ordering=")[1];

    const setReduxPosts = (payload: IPost[]) => {
        dispatch(setCardsAction(payload))
    }

    const getPosts = async () => {
        await handleGetPaginationParams(PostsService.getPosts.bind(null, activePage === 1 ? 11 : 11))
    }

    const filterPosts = () => {
        switch (activeTabItem) {
            case 2:
                return setPosts(cards.filter((card: IPost) => card.favorite));
            case 3:
                return setPosts(myPosts);
            default:
                setPosts(cards);
        }
    }

    const handleOrderPosts = async () => {
        if (ordering) {
            const response = await SortPostsService.getSortedPosts(ordering);

            const {results} = response;

            if (Array.isArray(results)) {
                dispatch(setCardsAction(results))
            }
        } else {
            getPosts()
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        setReduxPosts(pageResults)
    }, [pageResults])

    useEffect(() => {
        setPosts(cards)
    }, [cards])

    useEffect(() => {
        filterPosts()
    }, [activeTabItem, cards])

    useEffect(() => {
        handleOrderPosts()
    }, [search])

    return (
        <PageContainer title={title}>
            <Tabs config={TABS_CONFIG} activeTabItem={activeTabItem} onClick={handleSetActiveTabItem}/>
            {!isDesktopView ? <PostListAdaptive posts={posts}/> : <PostList posts={posts}/>}
            <Pagination items={posts}/>
        </PageContainer>
    );
};

export default Blog;