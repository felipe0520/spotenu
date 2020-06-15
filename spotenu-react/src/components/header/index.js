import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { AppBarHeader, ToolbarHeader } from "./styled";
import { goToLogin, goToRegister } from "../../actions/headerActions";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";

const Header = (props) => {
  const hendleGoToRegister = () => {
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
            {props.login ? (
              <Button color="inherit" onClick={hendleGoToRegister}>
                Login
              </Button>
            ) : (
              <Button color="inherit" onClick={handleGoToRegister}>
                Cadastro
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
