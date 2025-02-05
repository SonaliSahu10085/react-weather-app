import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";


function Navbar() {
  return (
    <AppBar position="fixed" className="bg-white">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title="Welcome to weather app">
            <IconButton sx={{ p: 0, display: "flex", mr: 1, height: 38, width: 38 }}>
              <img src="./weatherlogo.png" alt="" style={{ width: "100%", height: "100%" }}/>
            </IconButton>
          </Tooltip>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontSize: 33,
              fontWeight: 700,
              letterSpacing: ".1rem",
              background: "linear-gradient(to right, #1E88E5, #4FC3F7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Weather APP
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Visit My Profile">
              <IconButton
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/sonalisahu246/",
                    "_parent"
                  )
                }
                sx={{ p: 0 }}
              >
                <Avatar alt="Sonali Sahu" src="./myprofile.jpeg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
