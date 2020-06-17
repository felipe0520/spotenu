import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { AppBarHeader, ToolbarHeader } from "./styled";
import { goToLogin, goToRegister } from "../../actions/headerActions";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";

const Header = (props) => {
  const handleGoToLogin = () => {
    props.goToLogin();
  };

  const handleGoToRegister = () => {
    props.goToRegister();
  };
  return (
    <div>
      <AppBarHeader color="primary" position="static">
        <ToolbarHeader>
          <Box>
            <Typography variant="h6">Bem vindo</Typography>
          </Box>
          <Box>
            {props.buttonName === "login" ? (
              <Button color="inherit" onClick={handleGoToLogin}>
                Login
              </Button>
            ) : props.buttonName === "register" ? (
              <Button color="inherit" onClick={handleGoToRegister}>
                Cadastro
              </Button>
            ) : (
              <Button color="inherit" onClick={handleGoToRegister}>
                Logout
              </Button>
            )}
          </Box>
        </ToolbarHeader>
      </AppBarHeader>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(goToLogin),
  goToRegister: () => dispatch(goToRegister),
});

export default connect(null, mapDispatchToProps)(Header);
