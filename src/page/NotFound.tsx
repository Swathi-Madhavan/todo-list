import { Button, Stack, Typography } from "@mui/material";
import NotFoundIcon from "../assets/NotFoundIcon";
import { appColorsData } from "../themes/colorPallet";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const reDirectToHome = () => {
    navigate("/my-day");
  };
  return (
    <Stack
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <NotFoundIcon
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
          textAlign: "center",
        }}
      >
        404 <br />
        No page found
      </Typography>
      <Button
        sx={{
          fontFamily: "Roboto",
          fontSize: "17px",
          fontWeight: "300",
          color: appColorsData?.darkGray,
          letterSpacing: "0.00938em",
          lineHeight: 1.5,
          textTransform: "None",
          marginTop: "14px",
          backgroundColor: appColorsData.whiteColor,

          "&:hover": {
            backgroundColor: appColorsData.whiteColor,
          },
        }}
        onClick={reDirectToHome}
      >
        Go to Home
      </Button>
    </Stack>
  );
}
