import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DateRangeLine from "../assets/DateRangeLine";
import BellLight from "../assets/BellLight";
import HorizontalSwitchLight from "../assets/HorizontalSwitchLight";
import StarLight from "../assets/StarLight";
import { appColorsData } from "../themes/colorPallet";
import RadioButton from "./RadioButton";
import { TodoItemProp } from "../model";

import styles from "./TodoItem.module.scss";

export default function TodoItem({
  item,
  handleOpenNewTaskCallBack,
  showTextField,
  handleAddNewTaskChange,
  newTaskValue,
  addAsFavCallBack,
  markAsCompletedCallBack,
}: TodoItemProp) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      if (!showTextField) {
        setExpanded(isExpanded ? panel : false);
      }
    };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleAddNewTaskChange(event?.target?.value);
  };

  return (
    <Accordion
      expanded={showTextField || expanded === "panel1"}
      onChange={handleChangeAccordion("panel1")}
    >
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          "& .MuiAccordionSummary-content": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        }}
      >
        <Stack flexDirection={"row"} alignItems={"center"}>
          <RadioButton
            checked={item?.isSelected}
            value="a"
            onClick={() => markAsCompletedCallBack(item?.uniqueID ?? "")}
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
            className={showTextField ? styles.addTop : ""}
          />
          {showTextField ? (
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              onChange={handleTextFieldChange}
              value={newTaskValue}
            />
          ) : (
            <Typography
              className={item?.isSelected ? styles?.completed : ""}
              sx={{
                fontFamily: "Roboto",
                fontSize: "17px",
                fontWeight: "300",
                color: appColorsData.primaryColor,
              }}
            >
              {item?.todoTaskText}
            </Typography>
          )}
        </Stack>
        <IconButton
          disabled={showTextField}
          onClick={() => addAsFavCallBack(item?.uniqueID ?? "")}
        >
          <StarLight
            sx={{
              filter:
                "brightness(0) saturate(100%) invert(32%) sepia(33%) saturate(2318%) hue-rotate(193deg) brightness(101%) contrast(101%)",
            }}
            className={item?.isAddedAsFav ? styles.addedToFav : ""}
          />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          "&.MuiAccordionDetails-root": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 4px 8px -3px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
            backgroundColor: "#faf9f8",
            padding: "8px 17px 9px 29px",
            height: "57px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <DateRangeLine
            sx={{
              width: "24px",
              height: "24px",
            }}
          />
          <BellLight />
          <HorizontalSwitchLight />
        </Box>
        {showTextField && (
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#fff",
              color: "#868583",
              padding: "10px",
              border: "solid 0.5px #868583",
              height: "40px",
              textTransform: "none",
              width: "94px",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
            onClick={() => handleOpenNewTaskCallBack(false)}
          >
            To add
          </Button>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
