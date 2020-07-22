import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { FormLogin, FormInput, FormDiv } from "./styled";
import { Button, Typography } from "@material-ui/core";
import { login } from "../../actions/login/";

const LoginPage = () => {
  // const [state, dispatch] = useReducer(reducer, initialState, init);
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleLogin = (event) => {
    console.log(userData);
    event.preventDefault();
    dispatch(login(userData));
  };

  return (
    <div>
      <Header buttonName="register" />
      <Typography>Faça Login</Typography>
      <FormDiv>
        <FormLogin onSubmit={handleLogin}>
          <FormInput
            label="email ou nickname"
            required={true}
            onChange={handleChange}
            name="name"
            value={userData.input}
            required
          />
          <FormInput
            label="password"
            required={true}
            type="password"
            onChange={handleChange}
            name="password"
            value={userData.password}
            required
          />
          <Button type="submit" color="primary">
            Login
          </Button>
        </FormLogin>
      </FormDiv>
      <Footer />
    </div>
  );
};

export default LoginPage;
