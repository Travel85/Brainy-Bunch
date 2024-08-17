import { Box, Button, Modal, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function CreateCard({ postOpen, setPostOpen }) {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <>
      <Modal
        open={postOpen}
        onClose={() => setPostOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "black",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}>
          {/* Layout for content  */}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              rowGap: "5%",
            }}>
            <Typography id="modal-modal-title" variant="h6" gutterBottom>
              Create New Post
            </Typography>
            <Button
              sx={{ mb: 2 }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}>
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <TextField
              sx={{ mb: 2, minWidth: "230px" }}
              id="outlined-basic"
              label="Title"
              name="title"
              placeholder="Enter title"
              variant="outlined"
              required></TextField>
            <TextField
              sx={{ mb: 2, minWidth: "230px" }}
              id="outlined-basic"
              label="Description"
              name="description"
              placeholder="Enter description"
              multiline
              rows={4}
              required></TextField>
            <TextField
              sx={{ mb: 2, minWidth: "230px" }}
              id="outlined-basic"
              label="Location"
              name="location"
              placeholder="Enter location"
              required></TextField>
            <TextField
              sx={{ mb: 2, minWidth: "230px" }}
              id="outlined-basic"
              inputProps={{
                min: 0,
                max: 99,
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">€</InputAdornment>,
              }}
              label="Price"
              name="price"
              placeholder="Enter price"
              type="number"
              required></TextField>
            <TextField
              sx={{ mb: 2, minWidth: "230px" }}
              id="outlined-basic"
              label="email"
              name="email"
              placeholder="Enter email address"
              type="email"
              required></TextField>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}>
              <Button variant="contained" type="Reset">
                Reset
              </Button>
              <Button variant="contained" type="Submit">
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
