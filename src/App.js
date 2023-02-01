import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useReducedMotion } from '@react-spring/web';
import TopBar from "./components/TopBar";
import StatsPage, { useStatsData } from "./components/StatsPage";
import ComparePage, { useCompareData } from './components/ComparePage';

function App() {
  const [statsData, statsUpdaters] = useStatsData();
  const [compareData, compareUpdaters] = useCompareData();

  useReducedMotion()
  
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
