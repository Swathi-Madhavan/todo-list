import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoListStates, TodoViewData } from "../../model";

const initialState: TodoListStates = {
  todoLists: [],
  completedItems: [],
  isOpenAddNewTask: false,
  newTaskValue: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasksTodoLists: (state, action: PayloadAction<TodoViewData>) => {
      state.todoLists = action.payload;
    },
    setTasksCompletedItems: (state, action: PayloadAction<TodoViewData>) => {
      state.completedItems = action.payload;
    },
    setTasksIsOpenAddNewTask: (state, action: PayloadAction<boolean>) => {
      state.isOpenAddNewTask = action.payload;
    },
    setTasksNewTaskValue: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.newTaskValue = action.payload;
    },
  },
});

export const {
  setTasksTodoLists,
  setTasksCompletedItems,
  setTasksIsOpenAddNewTask,
  setTasksNewTaskValue,
} = tasksSlice.actions;

const tasksReducer = tasksSlice.reducer;
export default tasksReducer;
