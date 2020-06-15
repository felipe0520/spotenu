import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { FormLogin, FormInput, FormDiv } from "./styled";
import { Button, Typography } from "@material-ui/core";
const Login = () => {
  return (
    <div>
      <Header />
      <Typography>Faça Login</Typography>
      <FormDiv>
        <FormLogin>
          <FormInput label="email ou nickname" required={true} />
          <FormInput label="password" required={true} />
          <Button type="submit" color="primary">
            Login
          </Button>
        </FormLogin>
      </FormDiv>
      <Footer />
    </div>
  );
};

export default Login;
