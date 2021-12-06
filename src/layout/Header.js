import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import { Link } from "react-router-dom";
import { UserContext } from "../context";
const Header = () => {
  const context = useContext(UserContext);

  console.log("CONTEXT", context.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                LOGO
              </Link>
            </Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {context.user?.email ? context.user.email : ""}
          </Typography>

          {context.user ? (
            <Button color="inherit">
              <Link
                to="/logout"
                style={{ textDecoration: "none", color: "white" }}
              >
                logout
              </Link>
            </Button>
          ) : (
            <span>
              <Button color="inherit">
                <Link
                  to="/signin"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  signin
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  signup
                </Link>
              </Button>
            </span>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
