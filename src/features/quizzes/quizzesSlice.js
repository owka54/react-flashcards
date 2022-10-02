import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {quizId, name, topicId, cardIds} = action.payload;
            // console.log(action.payload);
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            };
        }
    }
});

export const addQuizThunk = quiz => {
    const { quizId, name, topicId, cardIds } = quiz;
    // console.log(quiz);
    return (dispatch) => {
        dispatch(addQuiz(quiz));
        dispatch(addQuizId( { quizId: quizId, topicId: topicId }));
    }
}

export const quizzesSelector = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions; 
export default quizzesSlice.reducer;