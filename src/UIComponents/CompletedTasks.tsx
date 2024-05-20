import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "../assets/ArrowForwardIcon";
import { TodoItemProp } from "../model";

export default function TodoItem({ item }: TodoItemProp) {
  return (
    <div>
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
