import {AnyAction, combineReducers} from 'redux';
import {configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {taskReducer} from 'features/tasks/tasks.reducer';

const rootReducer = combineReducers({
  tasks: taskReducer
})

export const store = configureStore({
  reducer: rootReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store;