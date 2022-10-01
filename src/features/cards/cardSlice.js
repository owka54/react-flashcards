import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const newCard = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back
            }
            state.cards[action.payload.id] = newCard;
        }
    }
});

export const cardsSelector = state => state.cards.cards;
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;