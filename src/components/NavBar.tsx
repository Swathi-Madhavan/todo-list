import { useId, useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SunLight from "../assets/SunLight";
import StarLight from "../assets/StarLight";
import Calander from "../assets/Calander";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import User from "../assets/User";
import AddRoundLight from "../assets/AddRoundLight";
import ChatPlus from "../assets/ChatPlus";
import { appColorsData } from "../themes/colorPallet";
import { Stack } from "@mui/material";
import Feather from "../assets/Feather";
import Settings from "../assets/Settings";
import AppBarItem from "../UIComponents/AppBarItem";
import TodoView from "./TodoView";
import { TodoListDataStructure } from "../model";
import { getTodoViewData } from "../Utils/comman";

function getIcon(label: string) {
  switch (label) {
    case "My day":
      return <SunLight />;
    case "Important":
      return <StarLight />;
    case "Planned":
      return <Calander />;
    case "Assigned to me":
      return <User />;
    case "Tasks":
      return <AssignmentOutlinedIcon />;
    case "prefix-New list":
      return <AddRoundLight />;
    case "suffix-New list":
      return <ChatPlus />;
  }
}
const drawerWidth = 240;

export default function NavBar({
  data,
  isOpenAddNewTask,
  handleOpenNewTaskCallBack,
  handleAddNewTaskChange,
  newTaskValue,
  addAsFavCallBack,
  markAsCompletedCallBack,
  competedData,
}: TodoListDataStructure) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const todoViewData = useMemo(() => getTodoViewData(data, 1), [data]);
  const completedViewData = useMemo(
    () => getTodoViewData(competedData, 1),
    [competedData]
  );
  const id = useId();
  console.log("id", id);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box
      sx={{
        backgroundColor: appColorsData?.whiteColor,
        boxShadow: "4px 0 20px -10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Toolbar>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flex={"1"}
        >
          <div>
            <Feather />
          </div>
          <div>
            <Settings />
          </div>
        </Stack>
      </Toolbar>
      <List>
        {["My day", "Important", "Planned", "Assigned to me", "Tasks"].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{getIcon(text)}</ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    "& .MuiTypography-root": {
                      fontFamily: "Roboto",
                      fontSize: "17px",
                      fontWeight: "300",
                      color: appColorsData?.darkGray,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["New list"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleOpenNewTaskCallBack(true)}>
              <ListItemIcon>{getIcon(`prefix-${text}`)}</ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "Roboto",
                    fontSize: "17px",
                    fontWeight: "300",
                    color: appColorsData?.darkGray,
                  },
                }}
              />
              <ListItemIcon>{getIcon(`suffix-${text}`)}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          "&.MuiAppBar-root": {
            backgroundColor: appColorsData?.whiteColor,
            boxShadow: "unset",
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{}}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <AppBarItem />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            backgroundColor: appColorsData?.whiteColor,
            boxShadow: "4px 0 20px -10px rgba(0, 0, 0, 0.25)",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <TodoView
          data={todoViewData}
          isOpenAddNewTask={isOpenAddNewTask}
          handleOpenNewTaskCallBack={handleOpenNewTaskCallBack}
          handleAddNewTaskChange={handleAddNewTaskChange}
          newTaskValue={newTaskValue}
          addAsFavCallBack={addAsFavCallBack}
          markAsCompletedCallBack={markAsCompletedCallBack}
          competedData={completedViewData}
        />
      </Box>
    </Box>
  );
}
