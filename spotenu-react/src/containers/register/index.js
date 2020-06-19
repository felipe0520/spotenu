import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { FormRegister, FormInputRegister, FormDivRegister } from "./styled";
import { Button, Typography } from "@material-ui/core";
import SelectRegister from "../../components/selectRegister/index";

const Register = () => {
  const [name, setname] = React.useState("");

  const handleChange = (event) => {
    setname({ ...name, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <Header buttonName="login" />
      <Typography>Cadastre-se</Typography>
      <FormDivRegister>
        <FormRegister onSubmit={handleSubmit}>
          <SelectRegister handleChange={handleChange} name="userType" />
          <FormInputRegister
            label="email"
            required={true}
            name="email"
            onChange={handleChange}
            value={name.value}
          />
          <FormInputRegister
            label="nickname"
            required={true}
            name="nickname"
            onChange={handleChange}
            value={name.value}
          />
          <FormInputRegister
            label="password"
            required={true}
            name="password"
            onChange={handleChange}
            value={name.value}
            type="password"
          />
          {name.userType === "band" && (
            <FormInputRegister
              label="descrição"
              required={true}
              name="description"
              onChange={handleChange}
              value={name.value}
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
