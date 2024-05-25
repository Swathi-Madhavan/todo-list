import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  TodoListStates, TodoViewData } from "../../model";

const initialState: TodoListStates = {
  todoLists: [],
  completedItems: [],
  isOpenAddNewTask: false,
  newTaskValue: "",
};

const plannedSlice = createSlice({
  name: "planned",
  initialState,
  reducers: {
    setPlannedTodoLists: (state, action: PayloadAction<TodoViewData>) => {
      state.todoLists = action.payload;
    },
    setPlannedCompletedItems: (state, action: PayloadAction<TodoViewData>) => {
      state.completedItems = action.payload;
    },
    setPlannedIsOpenAddNewTask: (state, action: PayloadAction<boolean>) => {
      state.isOpenAddNewTask = action.payload;
    },
    setPlannedNewTaskValue: (state, action: PayloadAction<string | undefined>) => {
      state.newTaskValue = action.payload;
    },
  },
});

export const {
  setPlannedTodoLists,
  setPlannedCompletedItems,
  setPlannedIsOpenAddNewTask,
  setPlannedNewTaskValue,
} = plannedSlice.actions;

const plannedReducer = plannedSlice.reducer;
export default plannedReducer;
