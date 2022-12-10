import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import CustomAttackPage from "./pages/CustomAttackPage";
import PrefilledAttackPage from './pages/PrefilledAttackPage';

function App() {
  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<CustomAttackPage/>}/>
          <Route path="/prefilled" element={<PrefilledAttackPage/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
