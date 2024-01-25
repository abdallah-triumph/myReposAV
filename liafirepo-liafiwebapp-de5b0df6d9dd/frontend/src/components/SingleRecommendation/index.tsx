import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { ArrowBackIos, InfoOutlined } from "@mui/icons-material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { BackgroundCircle } from "../common/BackgroundCircle";

const cashFlowData = [
  {
    day: 1,
    income: 3,
    expenses: -0.4,
  },
  {
    day: 2,
    income: 2.1,
    expenses: -0.7,
  },
  {
    day: 3,
    income: 1.2,
    expenses: -1.2,
  },
  {
    day: 4,
    income: 2.5,
    expenses: -0.8,
  },
  {
    day: 5,
    income: 2.6,
    expenses: -0.6,
  },
  {
    day: 6,
    income: 1.8,
    expenses: -1.2,
  },
  {
    day: 7,
    income: 3.1,
    expenses: -1,
  },
  {
    day: 8,
    income: 3.8,
    expenses: -0.9,
  },
  {
    day: 9,
    income: 1.4,
    expenses: -0.5,
  },
  {
    day: 10,
    income: 0.5,
    expenses: -0.8,
  },
  {
    day: 11,
    income: 1.9,
    expenses: -0.5,
  },
  {
    day: 12,
    income: 0.5,
    expenses: -1.5,
  },
  {
    day: 13,
    income: 0.7,
    expenses: -0.3,
  },
  {
    day: 14,
    income: 3.5,
    expenses: -1.4,
  },
  {
    day: 15,
    income: 3.1,
    expenses: -1,
  },
  {
    day: 16,
    income: 1.1,
    expenses: -1.3,
  },
  {
    day: 17,
    income: 2.6,
    expenses: -0.6,
  },
  {
    day: 18,
    income: 2.1,
    expenses: -0.3,
  },
  {
    day: 19,
    income: 1.4,
    expenses: -0.4,
  },
  {
    day: 20,
    income: 0.6,
    expenses: -1.4,
  },
  {
    day: 21,
    income: 1.4,
    expenses: -0.9,
  },
  {
    day: 22,
    income: 3.6,
    expenses: -0.2,
  },
  {
    day: 23,
    income: 2.5,
    expenses: -1,
  },
  {
    day: 24,
    income: 1.3,
    expenses: -0.5,
  },
  {
    day: 25,
    income: 2.5,
    expenses: -1.4,
  },
  {
    day: 26,
    income: 3.9,
    expenses: -1,
  },
  {
    day: 27,
    income: 1.5,
    expenses: -0.2,
  },
  {
    day: 28,
    income: 3,
    expenses: -0.5,
  },
];

export const SingleRecommendation = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "25vh",
        }}
        marginBottom="50px"
      >
        <Box
          zIndex={-1}
          position="absolute"
          right="0px"
          sx={{ minHeight: "20vh" }}
          display={{ xs: "none", sm: "flex" }}
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
        >
          <BackgroundCircle size={800}>
            <BackgroundCircle size={550}>
              <BackgroundCircle size={300}></BackgroundCircle>
            </BackgroundCircle>
          </BackgroundCircle>
        </Box>
        <Box marginTop={{ xs: 8, sm: 0 }}>
          <Grid
            container
            spacing={10}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={3}>
              <Stack spacing={2} justifyContent="center" alignItems="center">
                <Box
                  sx={{
                    textAlign: "center",
                    color: "#192653",
                    fontFamily: "Work Sans",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "27px",
                    letterSpacing: "-0.48px",
                  }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  Today's Health <InfoOutlined sx={{ color: "#192653" }} />
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    fontFamily: "Work Sans",
                    fontSize: "70px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "82.977px",
                    letterSpacing: "-1.66px",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "#1881FA",
                    }}
                  >
                    67
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: "#101828",
                      opacity: "0.4",
                    }}
                  >
                    /100
                  </Box>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Stack direction="row" spacing={2} justifyContent="space-evenly">
                <Grid
                  container
                  spacing={2}
                  sx={{
                    flexWrap: { xs: "nowrap", sm: "wrap" },
                    overflowX: "scroll",
                    paddingX: { xs: 3, sm: 0 },
                    paddingBottom: 1,
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ minWidth: { xs: "85vw", sm: "initial" } }}
                  >
                    <Card sx={{ borderRadius: "20px" }}>
                      <Box padding="20px 20px">
                        <Box
                          sx={{
                            color: "#192653",
                            fontFamily: "Work Sans",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "27px",
                            letterSpacing: "-0.4px",
                          }}
                          padding="10px 0px"
                          display="flex"
                          justifyContent="flex-start"
                          alignItems="center"
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
                            fontSize: { xs: "36px", sm: "28px" },
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
                      </Box>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ minWidth: { xs: "85vw", sm: "initial" } }}
                  >
                    <Card sx={{ borderRadius: "20px" }}>
                      <Box padding="20px 20px">
                        <Box
                          sx={{
                            color: "#192653",
                            fontFamily: "Work Sans",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "27px",
                            letterSpacing: "-0.4px",
                          }}
                          padding="10px 0px"
                          display="flex"
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          Forecasted Expenses
                        </Box>
                        <Box
                          component={"span"}
                          sx={{
                            color: "#192653",
                            leadingTrim: "both",
                            textEdge: "cap",
                            fontFamily: "Work Sans",
                            fontSize: { xs: "36px", sm: "28px" },
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
                          12,439.00
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ minWidth: { xs: "85vw", sm: "initial" } }}
                  >
                    <Card sx={{ borderRadius: "20px" }}>
                      <Box padding="20px 20px">
                        <Box
                          sx={{
                            color: "#192653",
                            fontFamily: "Work Sans",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "27px",
                            letterSpacing: "-0.4px",
                          }}
                          padding="10px 0px"
                          display="flex"
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          Cash on Deposit
                        </Box>
                        <Box
                          component={"span"}
                          sx={{
                            color: "#192653",
                            leadingTrim: "both",
                            textEdge: "cap",
                            fontFamily: "Work Sans",
                            fontSize: { xs: "36px", sm: "28px" },
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
                          21,439.00
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ minWidth: { xs: "85vw", sm: "initial" } }}
                  >
                    <Card sx={{ borderRadius: "20px" }}>
                      <Box padding="20px 20px">
                        <Box
                          sx={{
                            color: "#192653",
                            fontFamily: "Work Sans",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "27px",
                            letterSpacing: "-0.4px",
                          }}
                          padding="10px 0px"
                          display="flex"
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          Cash Reserve
                        </Box>
                        <Box
                          component={"span"}
                          sx={{
                            color: "#192653",
                            leadingTrim: "both",
                            textEdge: "cap",
                            fontFamily: "Work Sans",
                            fontSize: { xs: "36px", sm: "28px" },
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "56px",
                            letterSpacing: "-0.96px",
                          }}
                        >
                          128
                          <Box
                            component={"span"}
                            sx={{
                              color: "#B8BCCA",
                              marginRight: "4px",
                            }}
                          >
                            days
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "40px 40px 0px 0px",
          backgroundColor: "#FFFFFF",
        }}
        padding={{ xs: "20px", sm: "50px" }}
      >
        <Box
          sx={{
            color: "#192653",
            fontFamily: "Work Sans",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "27px",
            letterSpacing: "-0.4px",
            paddingBottom: { xs: 0, sm: 3 },
          }}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <ArrowBackIos fontSize="small" sx={{ color: "#192653" }} />
          Go Back
        </Box>
        <Card
          sx={{
            marginLeft: { xs: 0, sm: 1 },
            marginRight: { xs: 0, sm: 3 },
            paddingY: 5,
            borderRadius: "20px",
          }}
        >
          <Box padding={{ xs: "20px 30px", sm: "40px 40px" }}>
            <Stack
              justifyContent={"space-between"}
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 0 }}
            >
              <Box
                sx={{
                  color: "#192653",
                  fontFamily: "Mulish",
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "40px",
                  letterSpacing: "-0.64px",
                }}
              >
                End of the month is crowded with expenses
              </Box>
              <Box
                display={{ xs: "block", sm: "none" }}
                paddingY={3}
                sx={{
                  color: "#6D7282",
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "-0.16px",
                }}
              >
                By better distributing your payments you will increase your
                business health
              </Box>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Mulish",
                    textTransform: "none",
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: "12px",
                    letterSpacing: "0.32px",
                    padding: { xs: "15px 20px", sm: "18px 24px" },
                    backgroundColor: "#1881FA",
                    fontWeight: "700",
                    ":hover": {
                      backgroundColor: "#1881FA",
                    },
                  }}
                >
                  Schedule expenses
                </Button>
                <Select
                  value="Week"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="Week">Week</MenuItem>
                </Select>
              </Stack>
            </Stack>
            <Box
              display={{ xs: "none", sm: "block" }}
              paddingY={3}
              sx={{
                color: "#6D7282",
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "-0.16px",
              }}
            >
              By better distributing your payments you will increase your
              business health
            </Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 3 }}
              marginTop={{ xs: 4, sm: 0 }}
            >
              <Stack spacing={0.4}>
                <Stack direction="row" spacing={1}>
                  <Box
                    sx={{
                      color: "#141E42",
                      fontFamily: "Work Sans",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "-0.16px",
                    }}
                  >
                    Income
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontFamily: "Work Sans",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "56px",
                    letterSpacing: "-0.96px",
                  }}
                >
                  <Box
                    component={"span"}
                    sx={{
                      color: "#141E42",
                      opacity: 0.3,
                    }}
                  >
                    $
                  </Box>
                  <Box
                    component={"span"}
                    sx={{
                      color: "#192653",
                    }}
                  >
                    2,439.12
                  </Box>
                </Stack>
              </Stack>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  bgcolor: "#B7D8FD",
                  borderColor: "#B7D8FD",
                  width: 1.5,
                }}
              />
              <Divider
                sx={{
                  bgcolor: "#B7D8FD",
                  borderColor: "#B7D8FD",
                }}
              />
              <Stack spacing={0.4}>
                <Stack direction="row" spacing={1}>
                  <Box
                    sx={{
                      color: "#141E42",
                      fontFamily: "Work Sans",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "-0.16px",
                    }}
                  >
                    Expenses
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontFamily: "Work Sans",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "56px",
                    letterSpacing: "-0.96px",
                  }}
                >
                  <Box
                    component={"span"}
                    sx={{
                      color: "#141E42",
                      opacity: 0.3,
                    }}
                  >
                    $
                  </Box>
                  <Box
                    component={"span"}
                    sx={{
                      color: "#192653",
                    }}
                  >
                    819.51
                  </Box>
                </Stack>
              </Stack>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  bgcolor: "#B7D8FD",
                  borderColor: "#B7D8FD",
                  width: 1.5,
                }}
              />
              <Divider
                sx={{
                  bgcolor: "#B7D8FD",
                  borderColor: "#B7D8FD",
                }}
              />
              <Stack spacing={0.4}>
                <Stack direction="row" spacing={1}>
                  <Box
                    sx={{
                      color: "#141E42",
                      fontFamily: "Work Sans",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "-0.16px",
                    }}
                  >
                    Save
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontFamily: "Work Sans",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "56px",
                    letterSpacing: "-0.96px",
                  }}
                >
                  <Box
                    component={"span"}
                    sx={{
                      color: "#141E42",
                      opacity: 0.3,
                    }}
                  >
                    $
                  </Box>
                  <Box
                    component={"span"}
                    sx={{
                      color: "#192653",
                    }}
                  >
                    550.00
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Box>
          <Box width={{ xs: "100%", sm: "95%" }} height={{ xs: 250, sm: 550 }}>
            <ResponsiveContainer>
              <BarChart
                data={cashFlowData}
                barCategoryGap={1}
                stackOffset="sign"
              >
                <XAxis dataKey="day" />
                <YAxis axisLine={false} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Bar dataKey="income" fill="#DDDEE5" stackId="stack" />
                <Bar dataKey="expenses" fill="#1881FA" stackId="stack" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Card>
      </Box>
    </>
  );
};
