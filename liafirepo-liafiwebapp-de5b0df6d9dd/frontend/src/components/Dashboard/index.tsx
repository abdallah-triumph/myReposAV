import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  SvgIcon,
  chipClasses,
} from "@mui/material";
import {
  Add,
  ArrowForwardIos,
  ArrowOutward,
  InfoOutlined,
  TrendingDown,
  TrendingDownOutlined,
  TrendingUp,
  TrendingUpOutlined,
} from "@mui/icons-material";

import XTwitter from "../../assets/images/x_twitter.png";
import LinkedIn from "../../assets/images/linkedin.png";
import BankOfAmerica from "../../assets/images/bank_of_america.png";
import BestBuy from "../../assets/images/best_buy.png";
import Microsoft from "../../assets/images/microsoft.png";
import Bill from "../../assets/images/bill.png";
import { BackgroundCircle } from "../common/BackgroundCircle";
import { CircularProgress } from "../common/CircularProgress";
import { ReactComponent as FinancialTool } from "../../assets/svg/financial_tool.svg";
import { ReactComponent as ForecastedExpenses } from "../../assets/svg/forecasted_expenses.svg";
import { ReactComponent as CashOnDeposit } from "../../assets/svg/cash_on_deposit.svg";
import { ReactComponent as CashReserve } from "../../assets/svg/cash_reserve.svg";
import { ReactComponent as LiaFi } from "../../assets/svg/lia_fi.svg";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const endOfMonthChart = [
  {
    name: "1",
    e: 300,
    color: "#B7D8FD",
  },
  {
    name: "2",
    e: 400,
    color: "#B7D8FD",
  },
  {
    name: "3",
    e: 200,
    color: "#B7D8FD",
  },
  {
    name: "4",
    e: 100,
    color: "#B7D8FD",
  },
  {
    name: "5",
    e: 450,
    color: "#F0F7FF",
  },
  {
    name: "6",
    e: 500,
    color: "#F0F7FF",
  },
  {
    name: "7",
    e: 300,
    color: "#F0F7FF",
  },
];

const cashFlowData = [
  {
    name: "Mon",
    income: 2.7,
    expenses: 2.9,
  },
  {
    name: "Tue",
    income: 2.5,
    expenses: 2.4,
  },
  {
    name: "Wed",
    income: 3.2,
    expenses: 2.7,
  },
  {
    name: "Thu",
    income: 2.5,
    expenses: 3.2,
  },
  {
    name: "Fri",
    income: 2.5,
    expenses: 2.2,
  },
  {
    name: "Sat",
    income: 3.2,
    expenses: 3.2,
  },
  {
    name: "Sun",
    income: 1.5,
    expenses: 2,
  },
];

const BarWithBorder = (borderRadius: number) => {
  return (props: any) => {
    const { fill, x, y, width, height } = props;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          stroke="none"
          fill={fill}
          rx={borderRadius}
          ry={borderRadius}
        />
        <rect x={x} y={y} width={width} stroke="none" />
      </g>
    );
  };
};

export const Dashboard = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "50vh",
        }}
        marginBottom="50px"
      >
        <Box
          zIndex={-1}
          position="absolute"
          right="0px"
          sx={{ minHeight: "50vh" }}
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
                <Box>
                  <CircularProgress
                    value={67}
                    size={300}
                    display={{ xs: "inline-flex", sm: "inline-flex" }}
                    chip={
                      <Chip
                        label="Good"
                        size="medium"
                        sx={{
                          bgcolor: "#36C685",
                          color: "#ECFCF4",
                          leadingTrim: "both",
                          textEdge: "cap",
                          fontFamily: "Work Sans",
                          fontSize: "18px",
                          fontWeight: "600",
                          lineHeight: "24px",
                          letterSpacing: "-0.18px",
                          height: { xs: "30px", sm: "initial" },
                          width: { xs: "80px", sm: "initial" },
                          [`& .${chipClasses.label}`]: {
                            overflow: "initial",
                          },
                        }}
                      />
                    }
                  />
                </Box>
                <Stack spacing={1} sx={{ minWidth: "80%" }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Box
                      sx={{
                        color: "#192653",
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      Today
                    </Box>
                    <Box
                      sx={{
                        color: "#192653",
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      +2 <TrendingUp sx={{ color: "#2DA56F" }} />
                    </Box>
                  </Stack>
                  <Divider sx={{ borderColor: "#B7D8FD" }} />
                  <Stack direction="row" justifyContent="space-between">
                    <Box
                      sx={{
                        color: "#192653",
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      Last Week
                    </Box>
                    <Box
                      sx={{
                        color: "#192653",
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      -10 <TrendingDown sx={{ color: "#A52D2D" }} />
                    </Box>
                  </Stack>
                  <Divider sx={{ borderColor: "#B7D8FD" }} />
                </Stack>
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
                    sm={6}
                    sx={{ minWidth: { xs: "85vw", sm: "initial" } }}
                  >
                    <Card sx={{ borderRadius: "20px" }}>
                      <Box padding="40px 40px">
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <SvgIcon
                            component={FinancialTool}
                            viewBox="-6 -6 48 48"
                            sx={{
                              bgcolor: "#FEF337",
                              borderRadius: "100px",
                              width: "80px",
                              height: "80px",
                            }}
                          />
                          <ArrowOutward sx={{ color: "#1881FA" }} />
                        </Stack>
                        <Box
                          sx={{
                            color: "#192653",
                            fontFamily: "Work Sans",
                            fontSize: "20px",
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
                          Cash on Hand{" "}
                          <InfoOutlined
                            sx={{ margin: "0px 10px", color: "#B8BCCA" }}
                          />
                        </Box>
                        <Box
                          component={"span"}
                          sx={{
                            color: "#192653",
                            leadingTrim: "both",
                            textEdge: "cap",
                            fontFamily: "Work Sans",
                            fontSize: { xs: "36px", sm: "48px" },
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
                    sm={6}
                    sx={{ minWidth: { xs: "85vw", sm: "initial" } }}
                  >
                    <Card sx={{ borderRadius: "20px" }}>
                      <Box padding="40px 40px">
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <SvgIcon
                            component={ForecastedExpenses}
                            viewBox="-6 -6 48 48"
                            sx={{
                              bgcolor: "#FEF337",
                              borderRadius: "100px",
                              width: "80px",
                              height: "80px",
                            }}
                          />
                          <ArrowOutward sx={{ color: "#1881FA" }} />
                        </Stack>
                        <Box
                          sx={{
                            color: "#192653",
                            fontFamily: "Work Sans",
                            fontSize: "20px",
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
                          Forecasted Expenses{" "}
                          <InfoOutlined
                            sx={{ margin: "0px 10px", color: "#B8BCCA" }}
                          />
                        </Box>
                        <Box
                          component={"span"}
                          sx={{
                            color: "#192653",
                            leadingTrim: "both",
                            textEdge: "cap",
                            fontFamily: "Work Sans",
                            fontSize: { xs: "36px", sm: "48px" },
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
                    sm={6}
                    sx={{ minWidth: { xs: "85vw", sm: "initial" } }}
                  >
                    <Card sx={{ borderRadius: "20px" }}>
                      <Box padding="40px 40px">
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <SvgIcon
                            component={CashOnDeposit}
                            viewBox="-6 -6 48 48"
                            sx={{
                              bgcolor: "#FEF337",
                              borderRadius: "100px",
                              width: "80px",
                              height: "80px",
                            }}
                          />
                          <Button
                            variant="contained"
                            sx={{
                              fontFamily: "Mulish",
                              textTransform: "none",
                              fontSize: "16px",
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
                            Get it back
                          </Button>
                        </Stack>
                        <Box
                          sx={{
                            color: "#192653",
                            fontFamily: "Work Sans",
                            fontSize: "20px",
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
                          Cash on Deposit{" "}
                          <InfoOutlined
                            sx={{ margin: "0px 10px", color: "#B8BCCA" }}
                          />
                        </Box>
                        <Box
                          component={"span"}
                          sx={{
                            color: "#192653",
                            leadingTrim: "both",
                            textEdge: "cap",
                            fontFamily: "Work Sans",
                            fontSize: { xs: "36px", sm: "48px" },
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
                    sm={6}
                    sx={{ minWidth: { xs: "85vw", sm: "initial" } }}
                  >
                    <Card sx={{ borderRadius: "20px" }}>
                      <Box padding="40px 40px">
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <SvgIcon
                            component={CashReserve}
                            viewBox="-6 -6 48 48"
                            sx={{
                              bgcolor: "#FEF337",
                              borderRadius: "100px",
                              width: "80px",
                              height: "80px",
                            }}
                          />
                          <ArrowOutward sx={{ color: "#1881FA" }} />
                        </Stack>
                        <Box
                          sx={{
                            color: "#192653",
                            fontFamily: "Work Sans",
                            fontSize: "20px",
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
                          Cash Reserve{" "}
                          <InfoOutlined
                            sx={{ margin: "0px 10px", color: "#B8BCCA" }}
                          />
                        </Box>
                        <Box
                          component={"span"}
                          sx={{
                            color: "#192653",
                            leadingTrim: "both",
                            textEdge: "cap",
                            fontFamily: "Work Sans",
                            fontSize: { xs: "36px", sm: "48px" },
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
            leadingTrim: "both",
            textEdge: "cap",
            fontFamily: "Mulish",
            fontSize: "26.509px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "28.013px",
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <SvgIcon
            component={LiaFi}
            viewBox="-6 -14 56 56"
            sx={{
              width: "80px",
              height: "80px",
            }}
          />
          AI Assistant
          <InfoOutlined sx={{ color: "#192653", margin: "8px" }} />
        </Box>
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          sx={{
            flexWrap: { xs: "nowrap", sm: "wrap" },
            overflowX: "scroll",
            paddingX: { xs: 3, sm: 0 },
            paddingBottom: 2,
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
            sm={4}
            sx={{
              display: "flex",
              minWidth: { xs: "90vw", sm: "initial" },
            }}
          >
            <Card
              sx={{
                borderRadius: "20px",
              }}
            >
              <Box
                padding="40px 40px"
                height="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "27px",
                      letterSpacing: "-0.4px",
                    }}
                  >
                    End of the month expenses
                  </Box>
                  <Box
                    sx={{
                      color: "#2DA56F",
                      textAlign: "right",
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      letterSpacing: "-0.36px",
                    }}
                  >
                    Save $550
                  </Box>
                </Stack>
                <Box
                  sx={{
                    color: "#192653",
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "21px",
                    letterSpacing: "-0.14px",
                  }}
                  padding="10px 0px"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  Consider distributing your payments throughout the month, to
                  avoid an overwhelming surge at month's end
                </Box>
                <Box width="100%" height={200}>
                  <ResponsiveContainer>
                    <BarChart data={endOfMonthChart} barCategoryGap={3}>
                      <Bar dataKey="e" shape={BarWithBorder(9.35)}>
                        {endOfMonthChart.map((entry, index) => (
                          <Cell
                            cursor="pointer"
                            fill={entry.color}
                            key={`cell-${index}`}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", minWidth: { xs: "90vw", sm: "initial" } }}
          >
            <Card sx={{ borderRadius: "20px" }}>
              <Box
                padding="40px 40px"
                height="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "27px",
                      letterSpacing: "-0.4px",
                    }}
                  >
                    Irregular Invoicing
                  </Box>
                  <Box
                    sx={{
                      color: "#2DA56F",
                      textAlign: "right",
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      letterSpacing: "-0.36px",
                    }}
                  >
                    Save $259
                  </Box>
                </Stack>
                <Box
                  sx={{
                    color: "#192653",
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "21px",
                    letterSpacing: "-0.14px",
                  }}
                  padding="10px 0px"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  For businesses, ensure that you are billing your customers
                  promptly and accurately.
                </Box>
                <Box width="100%" height={200}>
                  <ResponsiveContainer>
                    <ComposedChart
                      data={[
                        {
                          name: "Page A",
                          uv: 590,
                          pv: 800,
                          amt: 1400,
                          cnt: 490,
                        },
                        {
                          name: "Page B",
                          uv: 868,
                          pv: 967,
                          amt: 1506,
                          cnt: 590,
                        },
                        {
                          name: "Page C",
                          uv: 1397,
                          pv: 1098,
                          amt: 989,
                          cnt: 350,
                        },
                        {
                          name: "Page D",
                          uv: 1480,
                          pv: 1200,
                          amt: 1228,
                          cnt: 480,
                        },
                        {
                          name: "Page E",
                          uv: 1520,
                          pv: 1108,
                          amt: 1100,
                          cnt: 460,
                        },
                        {
                          name: "Page F",
                          uv: 1400,
                          pv: 680,
                          amt: 1700,
                          cnt: 380,
                        },
                      ]}
                    >
                      <Line type="monotone" dataKey="uv" stroke="#DCECFE" />
                      <Area dataKey="pv" fill="#B7D8FD" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", minWidth: { xs: "90vw", sm: "initial" } }}
          >
            <Card sx={{ borderRadius: "20px" }}>
              <Box
                padding="40px 40px"
                height="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "27px",
                      letterSpacing: "-0.4px",
                    }}
                  >
                    One client generates more than 80% of income
                  </Box>
                </Stack>
                <Box
                  sx={{
                    color: "#192653",
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "21px",
                    letterSpacing: "-0.14px",
                  }}
                  padding="10px 0px"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  To improve cash flow with heavy reliance on a single client,
                  it's crucial to diversify your client base and consider new
                  offerings to attract different customers.
                </Box>
                <Box width="100%" height={200}>
                  <ResponsiveContainer>
                    <BarChart data={endOfMonthChart} barCategoryGap={3}>
                      <Bar dataKey="e" shape={BarWithBorder(9.35)}>
                        {endOfMonthChart.map((entry, index) => (
                          <Cell
                            cursor="pointer"
                            fill={entry.color}
                            key={`cell-${index}`}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid container padding="40px 0px">
          <Grid item xs={12} sm={8}>
            <Card
              sx={{
                marginLeft: { xs: 0, sm: 1 },
                marginRight: { xs: 0, sm: 3 },
                paddingY: 5,
                borderRadius: "20px",
              }}
            >
              <Box padding="40px 40px">
                <Stack
                  justifyContent={"space-between"}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 4, sm: 0 }}
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
                    Cash Flow
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
                      Run AI Forecast
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
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 2, sm: 7 }}
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
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        color: "#2DA56F",
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      <Box>+</Box>
                      <Box>2%</Box>
                      <TrendingUpOutlined sx={{ borderColor: "#2DA56F" }} />
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
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        color: "#AD2727",
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      <Box>-</Box>
                      <Box>4%</Box>
                      <TrendingDownOutlined sx={{ borderColor: "#AD2727" }} />
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
              <Box
                width={{ xs: "100%", sm: "95%" }}
                height={{ xs: 250, sm: 350 }}
              >
                <ResponsiveContainer>
                  <BarChart data={cashFlowData} barCategoryGap={5}>
                    <XAxis dataKey="name" />
                    <YAxis axisLine={false} />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <Bar
                      dataKey="income"
                      shape={BarWithBorder(9.35)}
                      fill="#1881FA"
                    />
                    <Bar
                      dataKey="expenses"
                      shape={BarWithBorder(9.35)}
                      fill="#DDDEE5"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                paddingX: { xs: 1, sm: 0 },
                marginTop: { xs: 2, sm: 0 },
              }}
            >
              <Box
                sx={{
                  color: "#192653",
                  fontFamily: "Mulish",
                  fontSize: "26px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "32px",
                  letterSpacing: "-0.52px",
                }}
              >
                Upcoming Bills
              </Box>
              <Select
                value="Bill Due"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="Bill Due">Bill Due</MenuItem>
              </Select>
            </Stack>
            <Stack marginTop="20px" spacing={1}>
              <Grid
                container
                alignItems="center"
                bgcolor="#E8F2FF"
                borderRadius="36px"
                padding="15px"
              >
                <Grid item xs={3}>
                  <Avatar src={XTwitter} sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid item xs={7}>
                  <Stack>
                    <Box
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      $129 + $12
                    </Box>
                    <Box
                      sx={{
                        color: "#192653",
                        fontFamily: "Work Sans",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "21px",
                        letterSpacing: "-0.14px",
                      }}
                    >
                      Twitter Ad Subscription
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Avatar sx={{ bgcolor: "#FFFFFF", width: 64, height: 64 }}>
                    <ArrowForwardIos sx={{ color: "#1881FA" }} />
                  </Avatar>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                bgcolor="#E8F2FF"
                borderRadius="36px"
                padding="15px"
              >
                <Grid item xs={3}>
                  <Avatar src={LinkedIn} sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid item xs={7}>
                  <Stack>
                    <Box
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      $129
                    </Box>
                    <Box
                      sx={{
                        color: "#192653",
                        fontFamily: "Work Sans",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "21px",
                        letterSpacing: "-0.14px",
                      }}
                    >
                      LinkedIn Ad Subscription
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Avatar sx={{ bgcolor: "#FFFFFF", width: 64, height: 64 }}>
                    <ArrowForwardIos sx={{ color: "#1881FA" }} />
                  </Avatar>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                bgcolor="#E8F2FF"
                borderRadius="36px"
                padding="15px"
              >
                <Grid item xs={3}>
                  <Avatar src={BankOfAmerica} sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid item xs={7}>
                  <Stack>
                    <Box
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      $129
                    </Box>
                    <Box
                      sx={{
                        color: "#192653",
                        fontFamily: "Work Sans",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "21px",
                        letterSpacing: "-0.14px",
                      }}
                    >
                      Bank Service
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Avatar sx={{ bgcolor: "#FFFFFF", width: 64, height: 64 }}>
                    <ArrowForwardIos sx={{ color: "#1881FA" }} />
                  </Avatar>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                bgcolor="#E8F2FF"
                borderRadius="36px"
                padding="15px"
              >
                <Grid item xs={3}>
                  <Avatar src={BestBuy} sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid item xs={7}>
                  <Stack>
                    <Box
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      $129
                    </Box>
                    <Box
                      sx={{
                        color: "#192653",
                        fontFamily: "Work Sans",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "21px",
                        letterSpacing: "-0.14px",
                      }}
                    >
                      Monthly Hardware Service
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Avatar sx={{ bgcolor: "#FFFFFF", width: 64, height: 64 }}>
                    <ArrowForwardIos sx={{ color: "#1881FA" }} />
                  </Avatar>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                bgcolor="#E8F2FF"
                borderRadius="36px"
                padding="15px"
              >
                <Grid item xs={3}>
                  <Avatar src={Microsoft} sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid item xs={7}>
                  <Stack>
                    <Box
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      $129
                    </Box>
                    <Box
                      sx={{
                        color: "#192653",
                        fontFamily: "Work Sans",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "21px",
                        letterSpacing: "-0.14px",
                      }}
                    >
                      Office 365 Monthly
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Avatar sx={{ bgcolor: "#FFFFFF", width: 64, height: 64 }}>
                    <ArrowForwardIos sx={{ color: "#1881FA" }} />
                  </Avatar>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                bgcolor="#E8F2FF"
                borderRadius="36px"
                padding="15px"
              >
                <Grid item xs={3}>
                  <Avatar src={Bill} sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid item xs={7}>
                  <Stack>
                    <Box
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "27px",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      $1029
                    </Box>
                    <Box
                      sx={{
                        color: "#192653",
                        fontFamily: "Work Sans",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "21px",
                        letterSpacing: "-0.14px",
                      }}
                    >
                      Local Rent
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Avatar sx={{ bgcolor: "#FFFFFF", width: 64, height: 64 }}>
                    <ArrowForwardIos sx={{ color: "#1881FA" }} />
                  </Avatar>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Box
              width="100%"
              height={350}
              sx={{
                borderRadius: "24px",
                border: "2px dashed #B7D8FD",
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                sx={{
                  height: "64px",
                  width: "64px",
                  boxShadow:
                    " 0px 6px 20px 0px rgba(22, 31, 66, 0.04), 0px 2px 5px 0px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Add sx={{ color: "#1881FA" }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              width="100%"
              height={350}
              sx={{
                borderRadius: "24px",
                border: "2px dashed #B7D8FD",
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                sx={{
                  height: "64px",
                  width: "64px",
                  boxShadow:
                    " 0px 6px 20px 0px rgba(22, 31, 66, 0.04), 0px 2px 5px 0px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Add sx={{ color: "#1881FA" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
