import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import ExerciseDetail from "./Components/Pages/ExerciseDetail";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/Pages/HomePage";
import "./App.css";

const App = () => {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1400px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};

export default App;
