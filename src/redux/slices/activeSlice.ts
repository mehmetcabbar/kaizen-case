import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ActiveState {
    value: number;
}

const initialState: ActiveState = {
    value: 0,
};

export const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        changeActive: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { changeActive } = activeSlice.actions;
export default activeSlice.reducer;