import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Stack,
  chipClasses,
} from "@mui/material";
import { TrendingUp } from "@mui/icons-material";

import { CircularProgress } from "../common/CircularProgress";
import BusinessHealthBackground from "../../assets/images/business-health-background.png";

export const LandingPage = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems={{ xs: "left", sm: "center" }}
      justifyContent="center"
      minHeight="100vh"
    >
      <Box
        component={"span"}
        sx={{
          position: "relative",
          top: { xs: "130px", sm: "0px" },
          textAlign: { xs: "left", sm: "center" },
          fontFamily: "Work Sans",
          letterSpacing: "-0.96px",
          fontSize: { xs: "76px", sm: "48px" },
          fontWeight: "300",
          color: "#192653",
          paddingLeft: { xs: "20px", sm: "none" },
          width: { xs: "550px", sm: "100%" },
        }}
      >
        Welcome back Goran
      </Box>
      <Box
        sx={{
          background: `url(${BusinessHealthBackground})`,
          backgroundPosition: { xs: "-150px", sm: "left" },
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          paddingTop: "44px",
          width: "1100px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            top: { xs: "120px", sm: "0px" },
            margin: "auto",
            width: { xs: "90%", sm: "750px" },
            height: { xs: "initial", sm: "250px" },
            borderRadius: "32px",
            background: "rgba(254, 243, 55, 1)",
          }}
        >
          <Box
            sx={{
              position: "relative",
              top: { xs: "40px", sm: "20px" },
              width: { xs: "90%", sm: "700px" },
              margin: "auto",
              height: { xs: "initial", sm: "277px" },
              borderRadius: "20px",
              boxShadow: "0px 4px 16px 1px rgba(22, 31, 66, 0.02)",
              background: "rgba(255, 255, 255, 1)",
              padding: "48px 60px",
            }}
          >
            <Box
              sx={{
                textAlign: { xs: "center", sm: "left" },
                fontFamily: "Work Sans",
                fontSize: { xs: "48px", sm: "24px" },
                lineHeight: "27px",
                letterSpacing: "-0.48px",
                padding: { xs: "50px", sm: "initial" },
              }}
            >
              Today's Health
            </Box>
            <Stack
              sx={{ marginTop: "40px" }}
              spacing={{ xs: 4, sm: 8 }}
              direction={{ xs: "column", sm: "row" }}
            >
              <Box>
                <Stack
                  direction="row"
                  spacing={4}
                  alignItems="center"
                  justifyContent="center"
                >
                  <CircularProgress
                    value={67}
                    size={120}
                    display={{ xs: "none", sm: "inline-flex" }}
                  />
                  <CircularProgress
                    value={67}
                    size={250}
                    display={{ xs: "inline-flex", sm: "none" }}
                  />
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    spacing={{ xs: 2, sm: 0 }}
                  >
                    <Chip
                      label="Good"
                      size="medium"
                      sx={{
                        bgcolor: "#36C685",
                        color: "#ECFCF4",
                        leadingTrim: "both",
                        textEdge: "cap",
                        fontFamily: "Work Sans",
                        fontSize: { xs: "48px", sm: "18px" },
                        fontWeight: "600",
                        lineHeight: "24px",
                        letterSpacing: "-0.18px",
                        height: { xs: "80px", sm: "initial" },
                        width: { xs: "200px", sm: "initial" },
                        [`& .${chipClasses.label}`]: {
                          overflow: "initial",
                        },
                      }}
                    />
                    <Stack direction="row" spacing={1}>
                      <Box
                        component={"span"}
                        sx={{
                          color: "#192653",
                          fontFamily: "Work Sans",
                          fontSize: { xs: "48px", sm: "18px" },
                          fontStyle: "normal",
                          fontWeight: "300",
                          lineHeight: "27px",
                          letterSpacing: "-0.4px",
                        }}
                      >
                        +2
                      </Box>
                      <TrendingUp fontSize="large" />
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: {
                    xs: "none",
                    sm: "initial",
                    borderColor: "#B7D8FD",
                  },
                }}
              />
              <Divider
                sx={{ display: { sm: "none", borderColor: "#B7D8FD" } }}
              />
              <Grid
                container
                direction="column"
                alignItems={{ xs: "center", sm: "left" }}
                justifyContent="center"
              >
                <Box
                  component={"span"}
                  sx={{
                    color: "#192653",
                    fontFamily: "Work Sans",
                    fontSize: { xs: "76px", sm: "20px" },
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "27px",
                    letterSpacing: "-0.4px",
                    textAlign: "left",
                    padding: { xs: "50px", sm: "initial" },
                  }}
                >
                  Cash on Hand
                </Box>
                <Box
                  component={"span"}
                  sx={{
                    color: "#192653",
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontFamily: "Work Sans",
                    fontSize: { xs: "76px", sm: "48px" },
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "56px",
                    letterSpacing: "-0.96px",
                  }}
                >
                  <Box
                    component={"span"}
                    sx={{
                      color: "#B8BCCA",
                      marginRight: "4px",
                    }}
                  >
                    $
                  </Box>
                  32,041.00
                </Box>
              </Grid>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          top: { xs: "150px", sm: "initial" },
          margin: "60px auto 0px auto",
          width: { xs: "900px", sm: "700px" },
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            borderRadius: "25%",
            textAlign: "center",
            fontSize: { xs: "40px", sm: "18px" },
            padding: { xs: "58px 44px", sm: "24px 32px" },
          }}
        >
          End of the month is crowded with expenses, improve your cash flow
        </Box>
      </Box>
      <Box textAlign="center" sx={{ marginTop: "50px" }}>
        <Button
          variant="contained"
          sx={{
            position: "relative",
            top: { xs: "180px", sm: "initial" },
            fontFamily: "Mulish",
            textTransform: "none",
            fontSize: { xs: "48px", sm: "16px" },
            lineHeight: "12px",
            letterSpacing: "0.32px",
            padding: { xs: "48px 48px", sm: "18px 24px" },
            backgroundColor: "#1881FA",
            fontWeight: "700",
            ":hover": {
              backgroundColor: "#1881FA",
            },
          }}
        >
          Get Detailed Insights
        </Button>
      </Box>
    </Grid>
  );
};
