import { Box, BoxProps } from "@mui/material";

export const BackgroundCircle = (props: BoxProps & { size: number }) => {
  return (
    <Box
      position="relative"
      right={`-${props.size - 650}px`}
      sx={{
        width: `${props.size}px`,
        height: `${props.size}px`,
        borderRadius: `${props.size / 2}px / ${props.size / 2}px`,
        border: "11px solid #B7D8FD",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...props}
    ></Box>
  );
};
