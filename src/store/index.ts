import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { layoutReducer } from '@/store/reducers/layout'

export const stateActions = {
    layoutActions: layoutReducer.actions
}

const reducer = combineReducers({
    layoutReducer: layoutReducer.reducer
})

export const store = configureStore({
    reducer
})

export type StateType = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch