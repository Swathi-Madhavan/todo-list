import { useMemo } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import useApp from "./useApp";
import { TodoItemInfo } from "./model";

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
        routeName: pathName,
      });

      setTodoListsRedux(pathName, oldStateData);
      setNewTaskValue(pathName, "");
    }
  }

  function updateOtherList(
    routeName: string,
    changedItemId: string,
    objToBeUpdated: TodoItemInfo
  ) {
    const todoListsBasedOnPath = getTodoListsData(routeName);
    const removedList = todoListsBasedOnPath?.filter(
      (row) => row?.uniqueID !== changedItemId
    );
    removedList.push(objToBeUpdated);
    setTodoListsRedux(pathName, removedList);
  }

  function addAsFav(id: string) {
    if (pathName !== "important") {
      const oldStateData = [...todoLists];
      const targetObjIndex = oldStateData?.findIndex(
        (row) => row?.uniqueID === id
      );
      if (targetObjIndex >= 0) {
        oldStateData[targetObjIndex].isAddedAsFav =
          !oldStateData[targetObjIndex].isAddedAsFav;

        setTodoListsRedux(pathName, oldStateData);

        const importantTodoListData = [...getTodoListsData("important")];
        const indexToBeUpdate = importantTodoListData?.findIndex(
          (row) => row?.uniqueID === id
        );
        console.log("indexToBeUpdate", indexToBeUpdate);

        if (indexToBeUpdate >= 0) {
          console.log("splice");
          importantTodoListData.splice(indexToBeUpdate, 0);
          setTodoListsRedux(
            "important",
            importantTodoListData.filter(
              (_, index) => index !== indexToBeUpdate
            )
          );
        } else {
          console.log("push");
          importantTodoListData.push(oldStateData[targetObjIndex]);
          setTodoListsRedux("important", importantTodoListData);
        }
      }
    } else {
      const oldStateData = [...todoLists];
      const targetObjIndex = oldStateData?.findIndex(
        (row) => row?.uniqueID === id
      );

      const targetObj = oldStateData[targetObjIndex];

      if (targetObj.routeName === "important") {
        oldStateData[targetObjIndex].isAddedAsFav =
          !oldStateData[targetObjIndex].isAddedAsFav;

        setTodoListsRedux(pathName, oldStateData);
      } else {
        const otherRouteTodoListData = [
          ...getTodoListsData(targetObj.routeName),
        ];
        const indexToBeUpdate = otherRouteTodoListData?.findIndex(
          (row) => row?.uniqueID === id
        );
        otherRouteTodoListData[indexToBeUpdate].isAddedAsFav =
          !otherRouteTodoListData[indexToBeUpdate].isAddedAsFav;

        if (!otherRouteTodoListData[indexToBeUpdate].isAddedAsFav) {
          setTodoListsRedux(targetObj.routeName, otherRouteTodoListData);
          setTodoListsRedux(
            "important",
            oldStateData.filter((_, index) => index !== targetObjIndex)
          );
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
