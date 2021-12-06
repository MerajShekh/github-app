import React, { useContext, useState } from "react";
import {
  Box,
  Card,
  Container,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import { auth } from "../config/firebaseConfig";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context";

const SignIn = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
      toast(error.message, {
        type: "error",
      });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      context.setUser({ email: user.email, uid: user.uid });
      return navigate("/");
    }
  });

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "3rem",
      }}
    >
      <Card sx={{ display: "flex", border: "1px solid green", p: "1rem" }}>
        <CardMedia
          component="img"
          sx={{ width: 151, mr: "2rem" }}
          image="https://image.freepik.com/free-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
          alt="Live from space album cover"
        />
        <Box
          className="meraj"
          width={340}
          height="auto"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Typography component="div" variant="h5">
              LOGIN HERE
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 1,
            }}
          >
            <TextField
              fullWidth
              label="Email"
              sx={{ marginBottom: "1rem" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ marginTop: "2rem" }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default SignIn;
