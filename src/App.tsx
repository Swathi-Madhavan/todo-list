import { useMemo } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import useApp from "./useApp";

function App() {
  const { pathname } = useLocation();

  const pathName = useMemo(() => pathname.replace("/", ""), [pathname]);

  const {
    getCompletedItems,
    getIsOpenAddNewTask,
    getNewTaskValue,
    getTodoListsData,
    setCompletedItems,
    setIsOpenAddNewTask,
    setNewTaskValue,
    setTodoListsRedux,
  } = useApp();

  const todoLists = useMemo(
    () => getTodoListsData(pathName),
    [getTodoListsData, pathName]
  );

  const importantTodoLists = useMemo(
    () => getTodoListsData("important"),
    [getTodoListsData]
  );

  const completedItems = useMemo(
    () => getCompletedItems(pathName),
    [getCompletedItems, pathName]
  );
  const isOpenAddNewTask = useMemo(
    () => getIsOpenAddNewTask(pathName),
    [getIsOpenAddNewTask, pathName]
  );
  const newTaskValue = useMemo(
    () => getNewTaskValue(pathName),
    [getNewTaskValue, pathName]
  );

  function handleOpenNewTask(status: boolean) {
    setIsOpenAddNewTask(pathName, status);
    if (status === false) {
      onAddTask();
    }
  }

  function updateTaskToTodoLists(newTask?: string) {
    setNewTaskValue(pathName, newTask ?? "");
  }

  function onAddTask() {
    if (newTaskValue) {
      const oldStateData = [...todoLists];

      oldStateData.push({
        isAddedAsFav: false,
        isSelected: false,
        uniqueID: uuidv4(),
        todoTaskText: newTaskValue,
      });

      setTodoListsRedux(pathName, oldStateData);
      setNewTaskValue(pathName, "");
    }
  }

  function addAsFav(id: string) {
    const oldStateData = [...todoLists];

    const targetObjIndex = oldStateData?.findIndex(
      (row) => row?.uniqueID === id
    );

    if (targetObjIndex >= 0) {
      const targetObj = oldStateData[targetObjIndex];

      oldStateData[targetObjIndex].isAddedAsFav =
        !oldStateData[targetObjIndex].isAddedAsFav;

      setTodoListsRedux(pathName, oldStateData);
      if (targetObj.isAddedAsFav) {
        const importantTodoListsOldState = [...importantTodoLists];

        importantTodoListsOldState.push(targetObj);
        setTodoListsRedux("important", importantTodoListsOldState);
      } else {
        const importantTodoListsOldState = [...importantTodoLists];

        const exsitingIndex = importantTodoListsOldState?.findIndex(
          (row) => row?.uniqueID === id
        );
        if (exsitingIndex >= 0) {
          importantTodoListsOldState.splice(exsitingIndex, 1);
          setTodoListsRedux("important", importantTodoListsOldState);
        }
      }
    }
  }

  function markAsCompleted(id: string) {
    const oldStateData = [...todoLists];
    const targetObj = oldStateData?.findIndex((row) => row?.uniqueID === id);
    if (targetObj >= 0) {
      const prevCompletedItems = [...completedItems];
      prevCompletedItems.push(oldStateData[targetObj]);
      setCompletedItems(pathName, prevCompletedItems);

      oldStateData.splice(targetObj, 1);
      setTodoListsRedux(pathName, oldStateData);
    }
  }

  return (
    <div>
      <NavBar
        data={todoLists}
        isOpenAddNewTask={isOpenAddNewTask}
        handleOpenNewTaskCallBack={handleOpenNewTask}
        handleAddNewTaskChange={updateTaskToTodoLists}
        newTaskValue={newTaskValue}
        addAsFavCallBack={addAsFav}
        markAsCompletedCallBack={markAsCompleted}
        competedData={completedItems}
      />
    </div>
  );
}

export default App;
