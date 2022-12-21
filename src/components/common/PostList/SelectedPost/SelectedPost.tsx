import React, {FC, useEffect} from 'react';
import styles from "./Selected.post.module.css";
import {IPost} from "../PostItem/PostItem";

import {useDispatch, useSelector} from "react-redux";

import PostActionButtons from "../PostActionButtons/PostActionButtons";
import {selectCardImgAction} from "../../../../store/reducers/selectedCardReducer";
import {useParams} from "react-router-dom";
import {handleGetPosts} from "../../../../store/asyncActions/postsActions";


interface SelectedPostProps {
    post: IPost
}

const SelectedPost: FC<SelectedPostProps> = ({post}) => {
    const dispatch = useDispatch();
    const handleCardImgSelect = () => dispatch(selectCardImgAction(post.image));

    const { id = 1 } = useParams();
    // @ts-ignore
    const { cards } = useSelector(state => state.selectedCard);
    const selectedPost = cards.find((post: IPost) => post.id === +id);

    const getPosts = async () => {
        await dispatch(handleGetPosts());
    }

    useEffect(() => {
        if (!cards.length) {
            getPosts()
        }
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={styles.postContent}>
                <div className={styles.postImg}>
                    {!!post.image && <img src={post.image} onClick={handleCardImgSelect} alt="img"/>}
                </div>
                <p className={styles.postText}>{post.text}</p>
            </div>
            {selectedPost
                ?
                <PostActionButtons post={selectedPost} variant={"selectedPostActions"}/>
                :
                <PostActionButtons post={post} variant={"selectedPostActions"}/>}
        </div>
    );
};

export default SelectedPost;