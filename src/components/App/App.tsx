import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "../AppRouter/AppRouter";

import MainContainer from "../common/MainContainer/MainContainer";
import PostImgModalWindow from "../common/PostModalWindow/PostImgModalWindow/PostImgModalWindow";
import {useSelector} from "react-redux";
import PostModalWindow from "../common/PostModalWindow/PostModalWindow";

function App() {
    // @ts-ignore
    const { selectedCard } = useSelector(state => state.selectedCard);
    // @ts-ignore
    const { selectedCardImg } = useSelector(state => state.selectedCard);

    return (
        <MainContainer>
            <AppRouter/>
            {!!selectedCard?.id && <PostModalWindow/>}
            {!!selectedCardImg?.image && <PostImgModalWindow/>}
        </MainContainer>
    );
}

export default App;
