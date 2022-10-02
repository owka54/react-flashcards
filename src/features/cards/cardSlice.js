import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { cardId, front, back } = action.payload;
            state.cards[cardId] = {
                id: cardId,
                front: front,
                back: back
            };
        }
    }
});

export const cardsSelector = state => state.cards.cards;
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;