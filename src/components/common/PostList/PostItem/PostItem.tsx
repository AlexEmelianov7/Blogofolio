import React, {FC, MouseEventHandler, ReactNode} from 'react';

import styles from "./PostItem.module.css"
import PostActionButtons from "../PostActionButtons/PostActionButtons";
import {ThemeVariant, useTheme} from "../../../../context/ThemeContext";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectCardAction, selectCardImgAction} from "../../../../store/reducers/selectedCardReducer";

type PostSizes = "S" | "M" | "L"

export interface IPost {
    id: number
    image: string
    description: string
    text: string
    date: string
    lesson_num: number
    title: string
    author: number
    onClick?: () => void
    like?: boolean
    disLike?: boolean
    favorite?: boolean
    likes?: number
    disLikes?: number
}

interface PostItemProps {
    size: PostSizes
    children?: ReactNode
}

const PostItem: FC<PostItemProps & IPost> = (props) => {
    const {id, image, description, date, title, size} = props;

    const { theme } = useTheme();

    const navigate = useNavigate();
    const handlePostPageOpen = () => navigate(`/blog/${id}`)

    const dispatch = useDispatch();
    const handleCardSelect = () => dispatch(selectCardAction(props));
    const handleCardImgSelect = () => dispatch(selectCardImgAction(props));

    const BigSize = () => (
        <div className={styles.bigPost}>
            <div className={styles.bigPostWrapper}>
                <div className={styles.bigPostContent}>
                    <p>{date}</p>
                    <h2 onClick={handlePostPageOpen} className={theme === ThemeVariant.dark ? styles.dark : ""}>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.bigPostImg}>
                    {!!image && <img src={image} onClick={handleCardSelect} alt="img"/>}
                </div>
            </div>
            <PostActionButtons post={props} variant={"postActions"}/>
        </div>
    )

    const MediumSize = () => (
        <div className={styles.mediumPostWrapper}>
            <div>
                <div className={styles.mediumPostImg}>
                    {!!image && <img onClick={handleCardSelect} src={image} alt="img"/>}
                </div>
                <p>{date}</p>
                <h2 onClick={handlePostPageOpen} className={theme === ThemeVariant.dark ? styles.dark : ""}>{title}</h2>
            </div>
            <PostActionButtons post={props} variant={"postActions"}/>
        </div>
    )
    
    const SmallSize = () => (
        <div className={styles.smallPost}>
            <div className={styles.smallPostWrapper}>
                <div className={styles.smallPostContent}>
                    <p>{date}</p>
                    <h2 onClick={handlePostPageOpen} className={theme === ThemeVariant.dark ? styles.dark : ""}>{title}</h2>
                </div>
                <div className={styles.smallPostImg}>
                    {!!image && <img onClick={handleCardSelect} src={image} alt="img"/>}
                </div>
            </div>
            <PostActionButtons post={props} variant={"postActions"}/>
        </div>
    )

    const renderPost = () => {
        switch (size) {
            case "S":
                return <SmallSize/>
            case "M":
                return <MediumSize/>
            case "L":
                return <BigSize/>
        }
    }

    return renderPost()
};

export default PostItem;