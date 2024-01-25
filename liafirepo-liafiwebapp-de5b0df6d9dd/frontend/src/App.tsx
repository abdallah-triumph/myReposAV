import { useState } from "react";

import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { CashFlowForecast } from "./components/CashFlowForecast";
import { Box, Button } from "@mui/material";
import { SingleRecommendation } from "./components/SingleRecommendation";

export const App = () => {
  const [selectedPage, setSelectedPage] = useState<
    "LandingPage" | "Dashboard" | "CashFlowForecast" | "SingleRecommendation"
  >("LandingPage");

  return (
    <>
      <Box sx={{ zIndex: 999 }}>
        <Button onClick={() => setSelectedPage("LandingPage")}>
          Landing Page
        </Button>
        <Button onClick={() => setSelectedPage("Dashboard")}>Dashboard</Button>
        <Button onClick={() => setSelectedPage("CashFlowForecast")}>
          Cash Flow Forecast
        </Button>
        <Button onClick={() => setSelectedPage("SingleRecommendation")}>
          Single Recommendation
        </Button>
      </Box>
      {selectedPage === "LandingPage" && <LandingPage />}
      {selectedPage === "Dashboard" && <Dashboard />}
      {selectedPage === "CashFlowForecast" && <CashFlowForecast />}
      {selectedPage === "SingleRecommendation" && <SingleRecommendation />}
    </>
  );
};
