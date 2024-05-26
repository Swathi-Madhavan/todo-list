import { Box, Stack, Typography } from "@mui/material";
import HomeLight from "../assets/HomeLight";
import OrderLight from "../assets/OrderLight";
import CollapseLight from "../assets/CollapseLight";
import { appColorsData } from "../themes/colorPallet";
import React from "react";

export default function AppBarItem() {
  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flex={"1"}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <HomeLight />
        <Typography
          variant="body1"
          sx={{
            color: appColorsData?.primaryColor,
          }}
        >
          Tasks
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Stack
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            gap: "16px",
          }}
        >
          <OrderLight />
          <Typography
            variant="body1"
            sx={{
              color: appColorsData?.primaryColor,
              gap: "16px",
            }}
          >
            Order
          </Typography>
        </Stack>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            gap: "16px",
          }}
        >
          <CollapseLight />
          <Typography
            variant="body1"
            sx={{
              color: appColorsData?.primaryColor,
            }}
          >
            Group
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
