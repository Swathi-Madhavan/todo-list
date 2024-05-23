import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import myDayReducer from "./slice/myDaySlice";
import assignedToMeReducer from "./slice/assignedToMe";
import importantReducer from "./slice/importantSlice";
import plannedReducer from "./slice/plannedSlice";
import tasksReducer from "./slice/tasksSlice";

const store = configureStore({
  reducer: {
    myday: myDayReducer,
    assignedToMe: assignedToMeReducer,
    important: importantReducer,
    planned: plannedReducer,
    tasks: tasksReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
