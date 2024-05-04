import { Stack } from "@mui/material";
import TodoItem from "../UIComponents/TodoItem";

export default function TodoView() {
  return (
    <Stack display={"flex"} flexDirection={"column"} flex={"1"}>
      <TodoItem />
    </Stack>
  );
}
