import { Stack } from "@mui/material";
import TodoItem from "../UIComponents/TodoItem";
import { TodoViewProp } from "../model";

export default function TodoView({
  data,
  isOpenAddNewTask,
  handleOpenNewTaskCallBack,
  handleAddNewTaskChange,
  newTaskValue,
  addAsFavCallBack,
  markAsCompletedCallBack,
  competedData,
}: TodoViewProp) {
  console.log("data", data);
  return (
    <Stack
      display={"flex"}
      flexDirection={"column"}
      flex={"1"}
      sx={{
        gap: "18px",
      }}
    >
      {isOpenAddNewTask && (
        <TodoItem
          handleOpenNewTaskCallBack={handleOpenNewTaskCallBack}
          showTextField={isOpenAddNewTask}
          handleAddNewTaskChange={handleAddNewTaskChange}
          newTaskValue={newTaskValue}
          addAsFavCallBack={addAsFavCallBack}
          markAsCompletedCallBack={markAsCompletedCallBack}
        />
      )}
      {data.map((item, index) => (
        <TodoItem
          item={item}
          key={index.toString()}
          handleOpenNewTaskCallBack={handleOpenNewTaskCallBack}
          handleAddNewTaskChange={handleAddNewTaskChange}
          addAsFavCallBack={addAsFavCallBack}
          markAsCompletedCallBack={markAsCompletedCallBack}
        />
      ))}
    </Stack>
  );
}
