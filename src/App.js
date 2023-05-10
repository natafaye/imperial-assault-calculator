import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useReducedMotion } from '@react-spring/web';
import TopBar from "./components/TopBar";
import StatsPage from "./components/StatsPage";
import ComparePage from './components/ComparePage';

function App() {
  useReducedMotion()

  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<StatsPage />}/>
          <Route path="/compare" element={<ComparePage/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
