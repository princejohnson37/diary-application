import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>SignUp</h1>
        </Grid>
        <Grid item xs={12}>
          <h3>Full Name</h3>
          <TextField></TextField>
          <h3>UserEmail</h3>
          <TextField></TextField>
          <h3>Password</h3>
          <TextField type="password"></TextField>
          <h3>Confirm Password</h3>
          <TextField type="password"></TextField>
        </Grid>
        <Button>SignUp</Button>
      </Grid>
    </Container>
  );
};

export default SignUp;
