import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopBar from "./pages/TopBar";
import StatsPage, { useStatsData } from "./pages/StatsPage";
import ComparePage, { useCompareData } from './pages/ComparePage';

function App() {
  const [statsData, statsUpdaters] = useStatsData();
  const [compareData, compareUpdaters] = useCompareData();
  
  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<StatsPage data={statsData} updaters={statsUpdaters} />}/>
          <Route path="/compare" element={<ComparePage data={compareData} updaters={compareUpdaters}/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
