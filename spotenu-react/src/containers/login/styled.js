import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  width: 35vw;
  align-items: center;
  margin: 5px;
`;

export const FormInput = styled(TextField)`
  width: 70%;
`;

export const FormDiv = styled.div`
  display: flex;
  height: 77vh;
  align-items: center;
  justify-content: space-around;
`;
