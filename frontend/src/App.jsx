import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//custom components imports
import { theme } from "./components/theme/theme";

//MUI imports
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

//REACT imports
import { Fragment } from "react";

//Components
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* <Register></Register> */}
        <Login></Login>
        {/* <Home></Home>   */}
      </ThemeProvider>
    </Fragment>
  );
}
export default App;
