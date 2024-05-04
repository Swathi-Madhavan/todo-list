import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button, Stack } from "@mui/material";
import DateRangeLine from "../assets/DateRangeLine";
import BellLight from "../assets/BellLight";
import HorizontalSwitchLight from "../assets/HorizontalSwitchLight";
import StarLight from "../assets/StarLight";
import { appColorsData } from "../themes/colorPallet";
import ArrowForwardIcon from "../assets/ArrowForwardIcon";
import RadioButton from "./RadioButton";

export default function TodoItem() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <Accordion defaultExpanded>
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
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "17px",
                fontWeight: "300",
                color: appColorsData.primaryColor,
              }}
            >
              Add a Task
            </Typography>
          </Stack>
          <StarLight />
        </AccordionSummary>
        <AccordionDetails
          sx={{
            "&.MuiAccordionDetails-root": {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 4px 8px -3px rgba(0, 0, 0, 0.25)",
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
          >
            To add
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "22px",
            },
          }}
        >
          <ArrowForwardIcon />
          <Typography
            sx={{
              color: "#414141",
              fontSize: "17px",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            Completed
          </Typography>
          <span
            style={{
              color: "#414141",
              fontSize: "17px",
              fontWeight: "300    ",
              fontFamily: "Roboto",
            }}
          >
            7
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
