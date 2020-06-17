import { makeStyles } from "@material-ui/core/styles";

//const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {},
  drawer: {
    width: "100%",
    //flexShrink: 0,
  },
  drawerPaper: {
    position: "static",
    width: "100%",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
