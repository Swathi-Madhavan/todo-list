import { useMemo } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { getTodoViewData } from "./Utils/comman";
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
      const oldSTateData = [...todoLists];

      const firstIndexData = getTodoViewData(oldSTateData, 1);

      firstIndexData.push({
        isAddedAsFav: false,
        isSelected: false,
        uniqueID: uuidv4(),
        todoTaskText: newTaskValue,
      });

      setTodoListsRedux(pathName, [...todoLists, firstIndexData]);
      setNewTaskValue(pathName, "");
    }
  }

  function addAsFav(id: string) {
    const oldSTateData = [...todoLists];

    const firstIndexData = getTodoViewData(oldSTateData, 1);

    const targetObjIndex = firstIndexData?.findIndex(
      (row) => row?.uniqueID === id
    );

    if (targetObjIndex >= 0) {
      const targetObj = firstIndexData[targetObjIndex];

      firstIndexData[targetObjIndex].isAddedAsFav =
        !firstIndexData[targetObjIndex].isAddedAsFav;

      setTodoListsRedux(pathName, [...todoLists, firstIndexData]);
      if (targetObj.isAddedAsFav) {
        const importantTodoListsOldState = [...importantTodoLists];
        const firstIndexDataOfImportantTodoList = getTodoViewData(
          importantTodoListsOldState,
          1
        );
        firstIndexDataOfImportantTodoList.push(targetObj);
        setTodoListsRedux("important", [
          ...importantTodoLists,
          firstIndexDataOfImportantTodoList,
        ]);
      } else {
        const importantTodoListsOldState = [...importantTodoLists];
        const firstIndexDataOfImportantTodoList = getTodoViewData(
          importantTodoListsOldState,
          1
        );
        const exsitingIndex = firstIndexDataOfImportantTodoList?.findIndex(
          (row) => row?.uniqueID === id
        );
        if (exsitingIndex >= 0) {
          firstIndexDataOfImportantTodoList.splice(exsitingIndex, 1);
          setTodoListsRedux("important", [
            ...importantTodoLists,
            firstIndexDataOfImportantTodoList,
          ]);
        }
      }
    }
  }

  function markAsCompleted(id: string) {
    const oldSTateData = [...todoLists];

    const firstIndexData = getTodoViewData(oldSTateData, 1);

    const targetObj = firstIndexData?.findIndex((row) => row?.uniqueID === id);

    if (targetObj >= 0) {
      // firstIndexData[targetObj].isSelected =
      //   !firstIndexData[targetObj].isSelected;

      const prevCompletedItems = [...completedItems];
      prevCompletedItems.push(firstIndexData[targetObj]);
      console.log("prevCompletedItems", prevCompletedItems);
      setCompletedItems(pathName, prevCompletedItems);

      firstIndexData.splice(targetObj, 1);
      setTodoListsRedux(pathName, [...todoLists, firstIndexData]);
    }
  }

  console.log("app", completedItems);
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
