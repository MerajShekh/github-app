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

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context";

const SignUp = () => {
  const context = useContext(UserContext);
  const auth = getAuth(context.firebaseApp);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
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
          width={340}
          height="auto"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Typography component="div" variant="h5">
              SIGNUP HERE
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
              Sign Up
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default SignUp;
