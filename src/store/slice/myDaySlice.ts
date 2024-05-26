import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  TodoListStates, TodoViewData } from "../../model";

const initialState: TodoListStates = {
  todoLists: [],
  completedItems: [],
  isOpenAddNewTask: false,
  newTaskValue: "",
};

const myDaySlice = createSlice({
  name: "myDaySlice",
  initialState,
  reducers: {
    setMydayTodoLists: (state, action: PayloadAction<TodoViewData>) => {
      state.todoLists = action.payload;
    },
    setMyDayCompletedItems: (state, action: PayloadAction<TodoViewData>) => {
      state.completedItems = action.payload;
    },
    setMyDayIsOpenAddNewTask: (state, action: PayloadAction<boolean>) => {
      state.isOpenAddNewTask = action.payload;
    },
    setMyDaySliceNewTaskValue: (state, action: PayloadAction<string | undefined>) => {
      state.newTaskValue = action.payload;
    },
  },
});

export const {
  setMydayTodoLists,
  setMyDayCompletedItems,
  setMyDayIsOpenAddNewTask,
  setMyDaySliceNewTaskValue,
} = myDaySlice.actions;

const myDayReducer = myDaySlice.reducer;
export default myDayReducer;
