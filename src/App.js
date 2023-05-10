import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useReducedMotion } from '@react-spring/web';
import TopBar from "./components/TopBar";
import StatsPage from "./components/StatsPage";
import ComparePage, { useCompareData } from './components/ComparePage';

function App() {
  const [compareData, compareUpdaters] = useCompareData()
  
  useReducedMotion()

  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<StatsPage />}/>
          <Route path="/compare" element={<ComparePage compareData={compareData} compareUpdaters={compareUpdaters}/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
