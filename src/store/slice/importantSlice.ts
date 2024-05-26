import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoListStates, TodoViewData } from "../../model";

const initialState: TodoListStates = {
  todoLists: [],
  completedItems: [],
  isOpenAddNewTask: false,
  newTaskValue: "",
};

const importantSlice = createSlice({
  name: "important",
  initialState,
  reducers: {
    setImportantTodoLists: (state, action: PayloadAction<TodoViewData>) => {
      state.todoLists = action.payload;
    },
    setImportantCompletedItems: (state, action: PayloadAction<TodoViewData>) => {
      state.completedItems = action.payload;
    },
    setImportantIsOpenAddNewTask: (state, action: PayloadAction<boolean>) => {
      state.isOpenAddNewTask = action.payload;
    },
    setImportantNewTaskValue: (state, action: PayloadAction<string | undefined>) => {
      state.newTaskValue = action.payload;
    },
  },
});

export const {
  setImportantTodoLists,
  setImportantCompletedItems,
  setImportantIsOpenAddNewTask,
  setImportantNewTaskValue,
} = importantSlice.actions;

const importantReducer = importantSlice.reducer;
export default importantReducer;
