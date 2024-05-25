export interface AppColorsProps {
  primaryColor: string;
  whiteColor: string;
  grayColor: string;
  darkGray: string;
  whiteColorTwo: string;
}

export interface TodoItemInfo {
  isSelected: boolean;
  isAddedAsFav: boolean;
  todoTaskText?: string;
  uniqueID: string;
}

export type TodoViewData = Array<TodoItemInfo>;

export type DataSource = Array<TodoViewData>;

export interface TodoListDataStructure {
  data: TodoViewData;
  competedData: TodoViewData;
  isOpenAddNewTask: boolean;
  handleOpenNewTaskCallBack: (status: boolean) => void;
  handleAddNewTaskChange: (newTask?: string) => void;
  newTaskValue?: string;
  addAsFavCallBack: (id: string) => void;
  markAsCompletedCallBack: (id: string) => void;
}

export interface TodoViewProp {
  data: TodoViewData;
  competedData: TodoViewData;
  isOpenAddNewTask: boolean;
  handleOpenNewTaskCallBack: (status: boolean) => void;
  handleAddNewTaskChange: (newTask?: string) => void;
  newTaskValue?: string;
  addAsFavCallBack: (id: string) => void;
  markAsCompletedCallBack: (id: string) => void;
}

export interface TodoItemProp {
  item?: TodoItemInfo;
  showTextField?: boolean;
  handleOpenNewTaskCallBack: (status: boolean) => void;
  handleAddNewTaskChange: (newTask?: string) => void;
  newTaskValue?: string;
  addAsFavCallBack: (id: string) => void;
  markAsCompletedCallBack: (id: string) => void;
}

export interface TodoListStates {
  todoLists: TodoViewData;
  completedItems: TodoViewData;
  isOpenAddNewTask: boolean;
  newTaskValue?: string;
}

export interface CompletedItemProps{
  completedItems: TodoViewData;
}