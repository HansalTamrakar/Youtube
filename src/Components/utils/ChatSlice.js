import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        message: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.message.splice(30, 1)
            state.message.unshift(action.payload)
        }
    }
})

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;