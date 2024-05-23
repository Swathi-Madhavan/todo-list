import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataSource, TodoListStates, TodoViewData } from "../../model";

const initialState: TodoListStates = {
  todoLists: [[], []],
  completedItems: [],
  isOpenAddNewTask: false,
  newTaskValue: "",
};

const assignedToMeSlice = createSlice({
  name: "assignedToMe",
  initialState,
  reducers: {
    setAssignToMeTodoLists: (state, action: PayloadAction<DataSource>) => {
      state.todoLists = action.payload;
    },
    setAssignedToMeCompletedItems: (state, action: PayloadAction<TodoViewData>) => {
      state.completedItems = action.payload;
    },
    setAssignedToMeIsOpenAddNewTask: (state, action: PayloadAction<boolean>) => {
      state.isOpenAddNewTask = action.payload;
    },
    setAssignedToMenewTaskValue: (state, action: PayloadAction<string | undefined>) => {
      state.newTaskValue = action.payload;
    },
  },
});

export const {
  setAssignToMeTodoLists,
  setAssignedToMeCompletedItems,
  setAssignedToMeIsOpenAddNewTask,
  setAssignedToMenewTaskValue,
} = assignedToMeSlice.actions;

const assignedToMeReducer = assignedToMeSlice.reducer;
export default assignedToMeReducer;
