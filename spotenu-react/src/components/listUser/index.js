import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AlbumIcon from "@material-ui/icons/Album";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import EmojiSymbolsIcon from "@material-ui/icons/EmojiSymbols";
import { getMusics } from "../../actions/getMusics/";
import { useDispatch } from "react-redux";
const ListUser = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleMusics = () => {
    dispatch(getMusics(token));
  };

  const handleGenre = () => {
    dispatch(getMusics(token));
  };

  const handleBands = () => {
    dispatch(getMusics(token));
  };

  const handleAlbuns = () => {
    dispatch(getMusics(token));
  };
  return (
    <List>
      {[
        { name: "Musicas", method: handleMusics },
        { name: "Gêneros musicais", method: handleGenre },
        { name: "Bandas", method: handleBands },
        { name: "Albuns", method: handleAlbuns },
      ].map((item, index) => (
        <ListItem button key={item.name} onClick={item.method}>
          <ListItemIcon>
            {index === 0 && <QueueMusicIcon />}
            {index === 1 && <EmojiSymbolsIcon />}
            {index === 2 && <LibraryMusicIcon />}
            {index === 3 && <AlbumIcon />}
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListUser;
