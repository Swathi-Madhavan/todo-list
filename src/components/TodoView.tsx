import { Stack, Typography } from "@mui/material";
import TodoItem from "../UIComponents/TodoItem";
import { TodoViewProp } from "../model";
import CompletedItem from "../UIComponents/CompletedItem";
import EmptyBox from "../assets/EmptyBox";
import styles from "./TodoView.module.scss";
import { appColorsData } from "../themes/colorPallet";

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
      className={
        data.length === 0 && !isOpenAddNewTask && competedData.length === 0
          ? styles.addheight
          : ""
      }
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
      {competedData.length > 0 && (
        <CompletedItem completedItems={competedData} />
      )}
      {data.length === 0 && !isOpenAddNewTask && competedData.length === 0 && (
        <>
          <EmptyBox
            sx={{
              height: "200px",
              width: "200px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "17px",
              fontWeight: "300",
              color: appColorsData?.darkGray,
              letterSpacing: "0.00938em",
              lineHeight: 1.5,
            }}
          >
            No todo items found
          </Typography>
        </>
      )}
    </Stack>
  );
}
