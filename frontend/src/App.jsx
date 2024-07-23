import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

import { styled } from "@mui/material";

//MUI imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//REACT imports
import { Fragment } from "react";
import { WelcomePage } from "./components/Main/WelcomePage";
import { ErrorPage } from "./components/Main/ErrorPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/Forms/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm";

function App() {
  return (
    <Container>
  
      <img src="./public/assets/logo.png" alt="" className="logoBrand"/>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/login" element={
          <LoginForm/>}/>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path = "/:path" element={<ErrorPage/>}/>
        
      </Routes>
      </BrowserRouter>

      <Box>
        
      </Box>
    </Container>
  );
}
export default App;
