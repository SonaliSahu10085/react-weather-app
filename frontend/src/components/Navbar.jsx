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
      <div className="container ps-3">
        <Toolbar disableGutters>
          <Tooltip title="Welcome to weather app">
            <IconButton sx={{ p: 0, display: "flex", mr: 1, height: 30, width: 30 }}>
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
              fontSize: 24,
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
                sx={{ p: 0,}}
              >
                <Avatar alt="Sonali Sahu" src="" sx={{height: "36px"}} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
}
export default Navbar;
