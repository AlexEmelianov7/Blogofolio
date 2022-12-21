import React, {FC, MouseEventHandler, useEffect, useState} from 'react';

import styles from "./PostModalWindow.module.css";
import PostItem, {IPost} from "../PostList/PostItem/PostItem";
import {useDispatch, useSelector} from "react-redux";
import {selectCardAction} from "../../../store/reducers/selectedCardReducer";
import IconSelector from "../IconSelector/IconSelector";
import {ThemeVariant, useTheme} from "../../../context/ThemeContext";

const PostModalWindow: FC = () => {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    // @ts-ignore

    const { selectedCard } = useSelector(state => state.selectedCard);
    const { cards } = useSelector((state:any) => state.selectedCard);

    const [post, setPost] = useState<IPost>(selectedCard);

    useEffect(() => {
        const selectedPost = cards.find((post: IPost) => post.id === selectedCard.id);
        setPost(!!selectedPost ? selectedPost : null)
    },)

    const handleModalClose: MouseEventHandler = () => {
        dispatch(selectCardAction(null));
    }

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            handleModalClose(event)
        }
    }


    return (
        <div onClick={handleClickAway} className={styles.modalWindowWrapper}>
            <div className={`${styles.modalWindowContent} ${theme === ThemeVariant.dark ? styles.dark : ""}`}>
                <PostItem {...post} size={"L"} />
                <IconSelector
                    className={styles.close}
                    svgClassName={`${theme === ThemeVariant.dark ? styles.dark : ""}`}
                    id={"modalClose"}
                    onClick={handleModalClose}
                />
            </div>
        </div>
    );
};

export default PostModalWindow;