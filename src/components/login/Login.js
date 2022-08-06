import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from "axios";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useEffect } from "react";
const paperStyle = {
  padding: 20,
  height: "60vh",
  width: "100%",
  ottom: 0,
};
const btnstyle = { margin: "8px 0" };

const Login = (props) => {
  const [token, setToken] = useToken();
  const [userNameOrEmail, setuserNameOrEmail] = useState();
  const [PasswordValue, setPasswordValue] = useState();
  const { handleChange } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (token && token.length > 1) navigate("/admin/sdsd");
  });
  const onSiginClick = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/user/login", {
      userNameOrEmail,
      password: PasswordValue,
    });

    const newToken = response.data.token;
    setToken(newToken);
    navigate("/admin/dasdd");
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username or Email"
          placeholder="Enter username or email"
          fullWidth
          onChange={(e) => setuserNameOrEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          onChange={(e) => setPasswordValue(e.target.value)}
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={onSiginClick}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?
          <Button onClick={(e) => handleChange(e, 1)}>Sign Up</Button>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
