import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    alert(`Logged in as ${username}`);
  };

  return (
    <>
      <CssBaseline />

      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: "success.main" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: 1 }}
          >
            CREAVATION LLP
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid
        container
        component="main"
        sx={{
          height: "calc(100vh - 112px)", // subtract header & footer height
          background:
            "linear-gradient(135deg, #e8f5e9 30%, #f1f8e9 90%)",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={8} md={5}>
          <Paper
            elevation={8}
            square={false}
            sx={{
              borderRadius: 3,
              p: 4,
              m: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
              <Lock />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 600 }}>
              Login
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 3, width: "100%" }}
            >
              {/* Username */}
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              {/* Password */}
              <FormControl
                variant="outlined"
                margin="normal"
                fullWidth
                required
              >
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              {/* Login Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2, py: 1.3, fontWeight: 600 }}
              >
                Login
              </Button>

              {/* Forgot Password */}
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "success.main",
                  },
                }}
              >
                Forgot password?
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "success.main",
          py: 2,
          textAlign: "center",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="body2">
            Developed by Creavation LLP (I) Pvt. Ltd. (2022-2025) | CVHR
            - CreavationPayroll is a registered trademark of Creavation LLP India
            Pvt. Ltd.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default LoginPage;
