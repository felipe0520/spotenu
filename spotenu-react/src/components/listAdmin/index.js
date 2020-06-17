import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const ListAdmin = () => {
  return (
    <List>
      {[
        "Aprovar bandas",
        "gerenciar gêneros musicais",
        "adicionar administradores",
      ].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index === 0 && <ThumbUpAltIcon />}
            {index === 1 && <AddCircleOutlineIcon />}
            {index === 2 && <PersonAddIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListAdmin;
