import React, {FC, MouseEventHandler} from 'react';
import {useDispatch, useSelector} from "react-redux";

import styles from "../PostModalWindow.module.css";
import IconSelector from "../../IconSelector/IconSelector";
import {selectCardAction, selectCardImgAction} from "../../../../store/reducers/selectedCardReducer";

const PostImgModalWindow: FC = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const { selectedCardImg } = useSelector(state => state.selectedCard);
    const handleModalClose: MouseEventHandler = () => {
        dispatch(selectCardImgAction(null));
        dispatch(selectCardAction(null));
    }

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            handleModalClose(event)
        }
    }

    return (
        <div onClick={handleClickAway} className={styles.modalWindowWrapper}>
            <div className={styles.modalWindowContent}>
                <img src={selectedCardImg.image} className={styles.img} alt="img"/>
                <IconSelector id={"modalClose"} className={styles.close} onClick={handleModalClose}/>
            </div>
        </div>
    );
};

export default PostImgModalWindow;