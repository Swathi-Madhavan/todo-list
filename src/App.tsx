import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { DataSource } from "./model";
import { getTodoViewData } from "./Utils/comman";
import { v4 as uuidv4 } from "uuid";
import { MarkAsUnread } from "@mui/icons-material";

function App() {
  const [todoLists, setTodoLists] = useState<DataSource>([[], []]);
  const [completedItems, setCompletedItems] = useState<DataSource>([[], []]);
  const [isOpenAddNewTask, setIsOpenAddNewTask] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string | undefined>("");

  function handleOpenNewTask(status: boolean) {
    setIsOpenAddNewTask(status);
    if (status === false) {
      onAddTask();
    }
  }

  function updateTaskToTodoLists(newTask?: string) {
    setNewTaskValue(newTask);
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

      setTodoLists([...todoLists, firstIndexData]);
      setNewTaskValue("");
    }
  }

  function addAsFav(id: string) {
    const oldSTateData = [...todoLists];

    const firstIndexData = getTodoViewData(oldSTateData, 1);

    const targetObj = firstIndexData?.findIndex((row) => row?.uniqueID === id);

    if (targetObj >= 0) {
      firstIndexData[targetObj].isAddedAsFav =
        !firstIndexData[targetObj].isAddedAsFav;
      setTodoLists([...todoLists, firstIndexData]);
    }
  }

  function markAsCompleted(id: string) {
    const oldSTateData = [...todoLists];

    const firstIndexData = getTodoViewData(oldSTateData, 1);

    const targetObj = firstIndexData?.findIndex((row) => row?.uniqueID === id);

    if (targetObj >= 0) {
      firstIndexData[targetObj].isSelected =
        !firstIndexData[targetObj].isSelected;
      setTodoLists([...todoLists, firstIndexData]);
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
