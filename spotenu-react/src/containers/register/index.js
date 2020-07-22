import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useDispatch } from "react-redux";
import { FormRegister, FormInputRegister, FormDivRegister } from "./styled";
import { Button, Typography } from "@material-ui/core";
import SelectRegister from "../../components/selectRegister/index";
import { signup } from "../../actions/signup/";

const Register = () => {
  const [userData, setname] = useState({
    email: "",
    nickname: "",
    password: "",
    description: "",
    name: "",
    role: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setname({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(userData));
  };

  return (
    <div>
      <Header buttonName="login" />
      <Typography>Cadastre-se</Typography>
      <FormDivRegister>
        <FormRegister onSubmit={handleSubmit}>
          <SelectRegister
            handleChange={handleChange}
            name="role"
            value={userData.role}
          />
          <FormInputRegister
            label="email"
            required={true}
            name="email"
            onChange={handleChange}
            value={userData.value}
            type="email"
          />
          <FormInputRegister
            label="nickname"
            required={true}
            name="nickname"
            onChange={handleChange}
            value={userData.value}
          />
          <FormInputRegister
            label="name"
            required={true}
            name="name"
            onChange={handleChange}
            value={userData.value}
          />
          <FormInputRegister
            label="password"
            required={true}
            name="password"
            onChange={handleChange}
            value={userData.value}
            type="password"
          />
          {userData.role === "band" && (
            <FormInputRegister
              label="descrição"
              required={true}
              name="description"
              onChange={handleChange}
              value={userData.value}
              multiline={true}
              rows={5}
            />
          )}
          <Button type="submit" color="primary">
            Criar
          </Button>
        </FormRegister>
      </FormDivRegister>
      <Footer />
    </div>
  );
};

export default Register;
