import React, {FC, useEffect, useState} from 'react';
import styles from "./Post.module.css";
import {PageProps} from "../../types/pageProps";
import PageContainer from "../../components/common/PageContainer/PageContainer";
import {useNavigate, useParams} from "react-router-dom";
import {IPost} from "../../components/common/PostList/PostItem/PostItem";
import SelectedPost from "../../components/common/PostList/SelectedPost/SelectedPost";
import {useDispatch, useSelector} from "react-redux";
import {handleGetPost} from "../../store/asyncActions/postActions";
import {setPostAction} from "../../store/reducers/postReducer";
import SelectedPostPagination from "../../components/common/Pagination/SelectedPostPagination/SelectedPostPagination";


const Post: FC<PageProps> = ({title = ""}) => {
    const [postCard, setPostCard] = useState<IPost | null>(null);
    const [nextTitle, setNextTitle] = useState<string>("");
    const [prevTitle, setPrevTitle] = useState<string>("");

    const { id = 1 } = useParams();
    const dispatch = useDispatch();

    const { post } = useSelector((state: any) => state.post);

    const { cards } = useSelector((state: any) => state.selectedCard);
    const selectedPost = cards.find((postCard: IPost) => postCard.id === +id);

    const prevPost = cards.find((postCard: IPost, index: number) => ((cards.indexOf(selectedPost) - 1) === index));
    const nextPost = cards.find((postCard: IPost, index: number) => ((cards.indexOf(selectedPost) + 1) === index));

    const navigate = useNavigate();
    const handlePrevPost = () => navigate(`/blog/${prevPost?.id}`);
    const handleNextPost = () => navigate(`/blog/${nextPost?.id}`);


    const getPost = async () => {
        await dispatch(handleGetPost(+id));
    }

    useEffect(() => {
        dispatch(setPostAction(null));
        getPost();
    }, [id])

    useEffect(() => {
       setPostCard(post);
       setNextTitle(!!nextPost?.title ? nextPost?.title : null);
       setPrevTitle(!!prevPost?.title ? prevPost?.title : null)
    })

    if (postCard)
        return (
            <PageContainer title={postCard.title}>
                <div className={styles.postWrapper}>
                    <SelectedPost post={postCard}/>
                    <SelectedPostPagination
                        prevTitle={prevTitle}
                        onClickPrev={handlePrevPost}
                        nextTitle={nextTitle}
                        onClickNext={handleNextPost}
                    />
                </div>
            </PageContainer>
        );
    else {
        return (
            <div>Post not found</div>
        )
    }
};

export default Post;