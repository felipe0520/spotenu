import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useStyles, DivWrapper } from "./styled";

const SelectRegister = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <DivWrapper>
      <Button className={classes.button} onClick={handleOpen}>
        Selecione
      </Button>
      <FormControl className={classes.formControl} required={true}>
        <InputLabel>Tipo</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.value}
          onChange={props.handleChange}
          name={props.name}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"band"}>banda</MenuItem>
          <MenuItem value={"admin"}>admin</MenuItem>
          <MenuItem value={"user"}>usuário</MenuItem>
        </Select>
      </FormControl>
    </DivWrapper>
  );
};

export default SelectRegister;
