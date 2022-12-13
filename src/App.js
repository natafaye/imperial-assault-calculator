import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import AttackPage from "./pages/AttackPage";
import AttributeTestPage from './pages/AttributeTestPage';
import ComparePage from './pages/ComparePage';

function App() {
  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<AttackPage/>}/>
          <Route path="/attribute" element={<AttributeTestPage/>}/>
          <Route path="/compare" element={<ComparePage/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
