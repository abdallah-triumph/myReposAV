import {
  Box,
  CircularProgress as MuiCircularProgress,
  CircularProgressProps,
  circularProgressClasses,
  Stack,
} from "@mui/material";
import { ReactNode } from "react";

export const CircularProgress = (
  props: CircularProgressProps & {
    value: number;
    size: number;
    display: { xs: string; sm: string };
    chip?: ReactNode;
  }
) => {
  return (
    <Box sx={{ position: "relative", display: props.display }}>
      <MuiCircularProgress
        variant="determinate"
        sx={{
          color: "#E8E9EE",
        }}
        size={props.size}
        thickness={5}
        value={100}
      />
      <MuiCircularProgress
        variant="determinate"
        {...props}
        size={props.size}
        thickness={5}
        sx={{
          color: "#1881FA",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, sm: 0 }}
        >
          <Box
            component="div"
            sx={{
              fontFamily: "Work Sans",
              fontSize: { xs: "80px", sm: "44px" },
              lineHeight: "44px",
              letterSpacing: "-0.861px",
            }}
          >{`${Math.round(props.value)}`}</Box>
          <Box>{props.chip}</Box>
        </Stack>
      </Box>
    </Box>
  );
};
