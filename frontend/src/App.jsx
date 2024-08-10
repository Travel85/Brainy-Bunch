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

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: "background.default",
            height: "100vh",
            width: "100wh",
          }}>
          Hello World!
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}
export default App;
