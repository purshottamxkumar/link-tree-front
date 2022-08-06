import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
const Signup = () => {
  const [token, setToken] = useToken();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [userNameValue, setUserNameValue] = useState("");
  const [displayName, setDisplayName] = useState("");
  const paperStyle = {
    padding: 20,
    width: "100%",
    margin: "0 auto",
    height: "60vh",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const navigate = useNavigate();
  useEffect(() => {
    if (token && token.length > 1) navigate("/admin/sdsd");
  });
  const onSignupClick = async (e) => {
    e.preventDefault();
    if (passwordValue !== confirmPasswordValue) return;
    const response = await axios.post("http://localhost:5000/user/signup", {
      email: emailValue,
      password: passwordValue,
      username: userNameValue,
      name: displayName,
    });

    const newToken = response.data.token;
    setToken(newToken);
    navigate("/please-verify");
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="User Name"
            placeholder="Enter User name"
            onChange={(e) => {
              setUserNameValue(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Diplay Name"
            placeholder="Enter Name"
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPasswordValue(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            style={{ marginBottom: "15px" }}
            onChange={(e) => {
              setConfirmPasswordValue(e.target.value);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e) => {
              onSignupClick(e);
            }}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
