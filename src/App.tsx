// src/App.js atau src/App.tsx
import React from "react";
import Home from "./pages/Home";
import SignPage from "./pages/SignPage/RegisterPage";
import Login from "./pages/SignPage/LoginPage";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box>
      <SignPage />
      <Login />
      <Home />
    </Box>
  );
}

export default App;
