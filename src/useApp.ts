import {  TodoViewData } from "./model";
import {
  setAssignToMeTodoLists,
  setAssignedToMeCompletedItems,
  setAssignedToMeIsOpenAddNewTask,
  setAssignedToMenewTaskValue,
} from "./store/slice/assignedToMe";
import {
  setImportantCompletedItems,
  setImportantIsOpenAddNewTask,
  setImportantNewTaskValue,
  setImportantTodoLists,
} from "./store/slice/importantSlice";
import {
  setMyDayCompletedItems,
  setMyDayIsOpenAddNewTask,
  setMyDaySliceNewTaskValue,
  setMydayTodoLists,
} from "./store/slice/myDaySlice";
import {
  setPlannedCompletedItems,
  setPlannedIsOpenAddNewTask,
  setPlannedNewTaskValue,
  setPlannedTodoLists,
} from "./store/slice/plannedSlice";
import {
  setTasksCompletedItems,
  setTasksIsOpenAddNewTask,
  setTasksNewTaskValue,
  setTasksTodoLists,
} from "./store/slice/tasksSlice";
import { useAppDispatch, useAppSelector } from "./store/stateStore";
import { cloneDeep } from "lodash";

export default function useApp() {
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => state);

  const { assignedToMe, important, myday, planned, tasks } = cloneDeep(state);

  const getTodoListsData = (pathName: string) => {
    if (pathName === "tasks") {
      return tasks.todoLists;
    } else if (pathName === "planned") {
      return planned.todoLists;
    } else if (pathName === "my-day") {
      return myday.todoLists;
    } else if (pathName === "important") {
      return important.todoLists;
    } else {
      return assignedToMe.todoLists;
    }
  };

  const setTodoListsRedux = (pathName: string, todoListsData: TodoViewData) => {
    if (pathName === "tasks") {
      dispatch(setTasksTodoLists(todoListsData));
    } else if (pathName === "planned") {
      dispatch(setPlannedTodoLists(todoListsData));
    } else if (pathName === "my-day") {
      dispatch(setMydayTodoLists(todoListsData));
    } else if (pathName === "important") {
      dispatch(setImportantTodoLists(todoListsData));
    } else if (pathName === "assigned-to-me") {
      dispatch(setAssignToMeTodoLists(todoListsData));
    }
  };

  const getCompletedItems = (pathName: string) => {
    if (pathName === "tasks") {
      return tasks.completedItems;
    } else if (pathName === "planned") {
      return planned.completedItems;
    } else if (pathName === "my-day") {
      return myday.completedItems;
    } else if (pathName === "important") {
      return important.completedItems;
    } else {
      return assignedToMe.completedItems;
    }
  };

  const setCompletedItems = (pathName: string, todoListsData: TodoViewData) => {
    if (pathName === "tasks") {
      dispatch(setTasksCompletedItems(todoListsData));
    } else if (pathName === "planned") {
      dispatch(setPlannedCompletedItems(todoListsData));
    } else if (pathName === "my-day") {
      dispatch(setMyDayCompletedItems(todoListsData));
    } else if (pathName === "important") {
      dispatch(setImportantCompletedItems(todoListsData));
    } else if (pathName === "assigned-to-me") {
      dispatch(setAssignedToMeCompletedItems(todoListsData));
    }
  };

  const getIsOpenAddNewTask = (pathName: string) => {
    if (pathName === "tasks") {
      return tasks.isOpenAddNewTask;
    } else if (pathName === "planned") {
      return planned.isOpenAddNewTask;
    } else if (pathName === "my-day") {
      return myday.isOpenAddNewTask;
    } else if (pathName === "important") {
      return important.isOpenAddNewTask;
    } else {
      return assignedToMe.isOpenAddNewTask;
    }
  };

  const setIsOpenAddNewTask = (pathName: string, isOpenAddNewTask: boolean) => {
    if (pathName === "tasks") {
      dispatch(setTasksIsOpenAddNewTask(isOpenAddNewTask));
    } else if (pathName === "planned") {
      dispatch(setPlannedIsOpenAddNewTask(isOpenAddNewTask));
    } else if (pathName === "my-day") {
      dispatch(setMyDayIsOpenAddNewTask(isOpenAddNewTask));
    } else if (pathName === "important") {
      dispatch(setImportantIsOpenAddNewTask(isOpenAddNewTask));
    } else if (pathName === "assigned-to-me") {
      dispatch(setAssignedToMeIsOpenAddNewTask(isOpenAddNewTask));
    }
  };

  const getNewTaskValue = (pathName: string) => {
    if (pathName === "tasks") {
      return tasks.newTaskValue;
    } else if (pathName === "planned") {
      return planned.newTaskValue;
    } else if (pathName === "my-day") {
      return myday.newTaskValue;
    } else if (pathName === "important") {
      return important.newTaskValue;
    } else {
      return assignedToMe.newTaskValue;
    }
  };

  const setNewTaskValue = (pathName: string, newTaskValue: string) => {
    if (pathName === "tasks") {
      dispatch(setTasksNewTaskValue(newTaskValue));
    } else if (pathName === "planned") {
      dispatch(setPlannedNewTaskValue(newTaskValue));
    } else if (pathName === "my-day") {
      dispatch(setMyDaySliceNewTaskValue(newTaskValue));
    } else if (pathName === "important") {
      dispatch(setImportantNewTaskValue(newTaskValue));
    } else if (pathName === "assigned-to-me") {
      dispatch(setAssignedToMenewTaskValue(newTaskValue));
    }
  };

  return {
    getTodoListsData,
    setTodoListsRedux,
    getCompletedItems,
    setCompletedItems,
    getIsOpenAddNewTask,
    setIsOpenAddNewTask,
    getNewTaskValue,
    setNewTaskValue,
  };
}
