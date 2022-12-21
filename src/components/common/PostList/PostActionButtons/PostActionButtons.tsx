import React, {FC, useState} from 'react';

import IconSelector from "../../IconSelector/IconSelector";

import styles from "./PostActionButtons.module.css"
import {ThemeVariant, useTheme} from "../../../../context/ThemeContext";
import {IPost} from "../PostItem/PostItem";
import {useDispatch} from "react-redux";
import {updateCardAction} from "../../../../store/reducers/selectedCardReducer";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

type PostActionButtonsVariant = "postActions" | "selectedPostActions";

interface PostActionButtonsProps {
    post: IPost
    variant: PostActionButtonsVariant
    onClick?: () => void
}

const PostActionButtons: FC<PostActionButtonsProps> = ({post, variant}) => {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    const handleLikePost = () => {
        dispatch(updateCardAction({...post, like: !post.like, disLike: !post.disLike && post.disLike, likes: 1, disLikes: 0}));
    }

    const handleDislikePost = () => {
        dispatch(updateCardAction({...post, disLike: !post.disLike, like: !post.like && post.like, disLikes: 1, likes: 0}));
    }

    const handleAddToFavouritePost = () => {
        dispatch(updateCardAction({...post, favorite: !post.favorite}));
    }

    const dropdownMenuElements = [{description: "Edit", action: () => {}}, {description: "Delete", action: () => {}}];

    const [open, setOpen] = useState<boolean>(false);
    const handleToggleDropdownMenu = () => setOpen(prevState => !prevState);

    return (
        <>
            {variant === "postActions"
                ?
                <div className={`${styles.postActions} ${theme === ThemeVariant.dark ? styles.darkActions : ""}`}>
                    <div className={styles.buttonsSide}>
                        <div className={styles.thumbsBtn}>
                            <IconSelector id={"thumbsUp"} onClick={handleLikePost} svgClassName={`${theme === ThemeVariant.dark ? styles.dark : ""} ${post.like && styles.active}`} />
                            {!!post.like && <span className={`${theme === ThemeVariant.dark ? styles.dark : ""} ${styles.number} `}>{post.likes}</span>}
                        </div>
                        <div className={styles.thumbsBtn}>
                            <IconSelector id={"thumbsDown"} onClick={handleDislikePost} svgClassName={`${theme === ThemeVariant.dark ? styles.dark : ""} ${post.disLike && styles.active}`} />
                            {!!post.disLike && <span className={`${theme === ThemeVariant.dark ? styles.dark : ""} ${styles.number}`}>{post.disLikes}</span>}
                        </div>
                    </div>
                    <div className={styles.buttonsSide}>
                        <IconSelector id={post.favorite ? "bookmarkFav" : "bookmark"} onClick={handleAddToFavouritePost} svgClassName={`${theme === ThemeVariant.dark ? styles.dark : ""} ${(post.favorite && theme === ThemeVariant.dark) && styles.dark}`} />
                        <IconSelector id={"dots"} className={styles.dots} svgClassName={theme === ThemeVariant.dark ? styles.dark : ""} onClick={handleToggleDropdownMenu}>
                            {open && <DropdownMenu className={styles.dropdownMenu} menuElements={dropdownMenuElements}/>}
                        </IconSelector>
                    </div>
                </div>
                :
                <div className={styles.selectedPostActions}>
                    <div className={styles.thumbs}>
                        <IconSelector id={"thumbsUp"} onClick={handleLikePost} className={`${post.like ? styles.thumbsLike : styles.thumbsUp}`} svgClassName={styles.svg}/>
                        <IconSelector id={"thumbsDown"} onClick={handleDislikePost} className={`${post.disLike ? styles.thumbsDislike : styles.thumbsDown}`} svgClassName={styles.svg}/>
                    </div>
                    <div className={styles.bookmark}>
                        <IconSelector id={"bookmark"} onClick={handleAddToFavouritePost} description={"Add to favorites"} className={`${post.favorite ? styles.favorite : styles.bookmarkIcon}`} svgClassName={styles.svg}/>
                    </div>
                </div>
            }
        </>
    );
};

export default PostActionButtons;