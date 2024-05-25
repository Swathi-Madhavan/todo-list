import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import TickIcon from "../assets/TickIcon";
import StarLight from "../assets/StarLight";
import { CompletedItemProps } from "../model";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CompletedItem({ completedItems }: CompletedItemProps) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          "&.MuiAccordion-root": {
            borderColor: "#faf9f8",
            backgroundColor: "#faf9f8",
            borderBottomColor: "black",
          },
          "& .MuiSvgIcon-root": {
            marginRight: "10px",
          },
        }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              marginLeft: "16px",
            },
          }}
        >
          <Typography>
            Completed{" "}
            <span
              style={{
                marginLeft: "10px",
              }}
            >
              {completedItems.length}
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {completedItems.map((row, index) => (
            <Box
              key={row?.uniqueID}
              sx={{
                height: "57px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderColor: "black",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <Box
                sx={{
                  height: "22px",
                  width: "179px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <TickIcon />
                <Typography
                  sx={{
                    textDecoration: "line-through",
                  }}
                >
                  {row?.todoTaskText}
                </Typography>
              </Box>
              <IconButton
                sx={{
                  marginRight: "16px",
                  filter:
                    "brightness(0) saturate(100%) invert(32%) sepia(33%) saturate(2318%) hue-rotate(193deg) brightness(101%) contrast(101%)",

                  "& .MuiSvgIcon-root": {
                    marginRight: "0px",
                  },
                }}
                disabled
              >
                <StarLight
                // className={item?.isAddedAsFav ? styles.addedToFav : ""}
                />
              </IconButton>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
