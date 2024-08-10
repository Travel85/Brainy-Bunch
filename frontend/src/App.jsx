import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//MUI imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

//REACT imports
import { Fragment } from "react";

function App() {
  return (
    <Container>
      <h1 align="center">Brainy Bunch!</h1>
      <h2 align="center">Where Brilliance Blooms!</h2>
      <Box>
        <Alert severity="success">Brainy bunch rocks!</Alert>
      </Box>
    </Container>
  );
}
export default App;
