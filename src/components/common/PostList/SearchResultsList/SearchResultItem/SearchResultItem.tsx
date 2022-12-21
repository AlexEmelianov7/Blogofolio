import React, {FC} from 'react';
import {IPost} from "../../PostItem/PostItem";

import styles from "./SearchResultItem.module.css";
import PostActionButtons from "../../PostActionButtons/PostActionButtons";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectCardAction} from "../../../../../store/reducers/selectedCardReducer";
import {ThemeVariant, useTheme} from "../../../../../context/ThemeContext";

const SearchResultItem: FC<IPost> = (props) => {
    const { theme } = useTheme();

    const { id = 1, title, date, image} = props;

    const navigate = useNavigate();
    const handlePostPageOpen = () => navigate(`/blog/${id}`);

    const { cards } = useSelector((state: any) => state.selectedCard);

    const selectedPost = cards.find((post: IPost) => post.id === +id);

    const dispatch = useDispatch();
    const handleCardSelect = () => {
        dispatch(selectCardAction(props));
    }

    return (
        <div className={styles.searchPost}>
            <div className={styles.searchPostElements}>
                <div className={styles.img}>
                    {!!image && <img onClick={handleCardSelect} src={image} alt="img"/>}
                </div>
                <div className={styles.searchPostContent}>
                    <p className={styles.date} >{date}</p>
                    <h2
                        className={`${styles.title} ${theme === ThemeVariant.dark ? styles.dark : ""}`}
                        onClick={handlePostPageOpen}
                    >
                        {title}
                    </h2>
                </div>
            </div>
            {selectedPost
                ?
                <PostActionButtons post={selectedPost} variant={"postActions"} onClick={handleCardSelect}/>
                :
                <PostActionButtons post={props} variant={"postActions"} onClick={handleCardSelect}/>
            }
        </div>
    );
};

export default SearchResultItem;