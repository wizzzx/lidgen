import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateType } from '@/store'

const initialState: any = {
    application_id: null
}

export const layoutReducer = createSlice({
    name: '@layoutReducer',
    initialState,
    reducers: {
        setApplicationId: (
            state,
            { payload }: PayloadAction<{ application_id: number | null }>
        ) => {
            state.application_id = payload.application_id
        }
    }
})

export const layoutReducerSelectors = {
    getApplicationId: (state: StateType) => state.layoutReducer.application_id
}