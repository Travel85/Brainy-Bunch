import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

export function Login() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
      }}
    >
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
              }}
            >
              <img
                style={{
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "8px",
                  margin: "5px",
                }}
                src="/logo.png"
              ></img>
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
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <TextField
                id="name"
                label="Username"
                placeholder="Enter username"
                variant="outlined"
                required
              ></TextField>
              <TextField
                id="password"
                label="Password"
                placeholder="Enter password"
                variant="outlined"
                type="password"
                required
              ></TextField>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button type="reset" variant="contained">
                  Cancel
                </Button>
                <Button type="submit" variant="contained">
                  Enter
                </Button>
              </Box>
              <Box>
                <Link variant="body2" href="#">
                  Forget your password? Click here
                </Link>
              </Box>
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
