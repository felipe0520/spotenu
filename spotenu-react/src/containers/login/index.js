import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { FormLogin, FormInput, FormDiv } from "./styled";
import { Button, Typography } from "@material-ui/core";
const Login = () => {
  return (
    <div>
      <Header buttonName="register" />
      <Typography>Faça Login</Typography>
      <FormDiv>
        <FormLogin>
          <FormInput label="email ou nickname" required={true} />
          <FormInput label="password" required={true} type="password" />
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
