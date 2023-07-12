import {TaskType, UpdateTaskModelType} from 'common/types/common.types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';

const initialState: TaskType[] = []

const slice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{title: string}>) => {
      return [...state, {
        id: v1(),
        title: action.payload.title,
        status: false
      }]
    },
    updateTask: (state, action: PayloadAction<{id: string, model: UpdateTaskModelType}>) => {
      return state.map(t => t.id ===action.payload.id ? {...t, ...action.payload.model} : t)
    },
    removeTask: (state, action: PayloadAction<{id: string}>) => {
      return state.filter(t => t.id !== action.payload.id)
    },
  }
})

export const taskReducer = slice.reducer
export const taskActions = slice.actions