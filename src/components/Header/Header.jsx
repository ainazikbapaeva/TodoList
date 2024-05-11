import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      {/* <Box sx={{ flexGrow: 1, mt: "20px" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => navigate("/admin")}
            >
              <AdminPanelSettingsIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", cursor: "pointer" },
              }}
              onClick={() => navigate("/list")}
            >
              Home
            </Typography>
          </Toolbar>
        </AppBar>
      </Box> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-around",
              gap: "800px",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              TODO LIST
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Typography
                onClick={() => navigate("/admin")}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                Admin
              </Typography>
              <Typography
                onClick={() => navigate("/list")}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                About
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
