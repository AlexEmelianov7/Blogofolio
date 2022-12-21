import {Reducer} from "redux";
import {IPost} from "../../components/common/PostList/PostItem/PostItem";

enum SelectedCardActions {
    SELECT_CARD = "SELECT_CARD",
    SELECT_CARD_IMG = "SELECT_CARD_IMG",
    SET_CARDS = "SET_CARDS",
    UPDATE_CARD = "UPDATE_CARD"
}

const initialState = {
    selectedCard: null,
    selectedCardImg: null,
    cards: []
}

export const selectedCardReducer: Reducer = ((state = initialState, action) => {
    switch (action.type) {
        case SelectedCardActions.SELECT_CARD:
            return {...state, selectedCard: action.payload}

        case SelectedCardActions.SELECT_CARD_IMG:
            return {...state, selectedCardImg: action.payload}

        case SelectedCardActions.SET_CARDS:
            return {...state, cards: action.payload}

        case SelectedCardActions.UPDATE_CARD:
            const arr = state.cards.map((item: IPost) => item)
            const oldCard = arr.find((card: IPost) => card.id === action.payload.id)
            const cardIndex = arr.indexOf(oldCard)
            arr.splice(cardIndex, 1, action.payload);
            return {...state, cards: arr}

        default:
            return state
    }
})

export const selectCardAction = (payload: any) => ({type: SelectedCardActions.SELECT_CARD, payload});
export const selectCardImgAction = (payload: any) => ({type: SelectedCardActions.SELECT_CARD_IMG, payload});
export const setCardsAction = (payload: IPost[]) => ({type: SelectedCardActions.SET_CARDS, payload});
export const updateCardAction = (payload: IPost) => ({type: SelectedCardActions.UPDATE_CARD, payload});
