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

import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";
const Header = () => {
  const context = useContext(UserContext);

  const handleLogOut = async () => {
    await signOut(auth);
  };

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
            <Button color="inherit" onClick={handleLogOut}>
              logout
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
