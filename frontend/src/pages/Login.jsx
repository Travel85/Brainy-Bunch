import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export function Login() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
      }}>
      <Box sx={{ flexGrow: 1, height: "100vh", width: "100vw" }}>
        <Grid container spacing={2}>
          {/*  Header */}
          <Grid xs={12} md={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}>
              <img
                style={{
                  maxWidth: "50%",
                  height: "auto",
                  borderRadius: "8px",
                  margin: "5px",
                }}
                src="src/assets/logo.png"></img>
            </Box>
          </Grid>
          {/*   Login Area */}
          <Grid xs={3} md={3}></Grid>
          <Grid xs>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}>
              <TextField
                id="name"
                label="Enter username"
                variant="outlined"
                required></TextField>
              <TextField
                id="password"
                label="Enter password"
                variant="outlined"
                type="password"
                required></TextField>
              <Button variant="contained">Enter</Button>
              <Button variant="contained">Cancel</Button>
            </Box>
          </Grid>
          <Grid xs={3}></Grid>
          {/*     Footer */}
          <Grid xs={12} md={12}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
