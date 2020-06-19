import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AlbumIcon from "@material-ui/icons/Album";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import EmojiSymbolsIcon from "@material-ui/icons/EmojiSymbols";

const Musicas = (index) => {
  console.log(index);
};

const ListUser = () => {
  return (
    <List>
      {["Musicas", "Gêneros musicais", "Bandas", "Álbuns"].map(
        (text, index) => (
          <ListItem button key={text} onClick={() => `"${text}"`(index)}>
            <ListItemIcon>
              {index === 0 && <QueueMusicIcon />}
              {index === 1 && <EmojiSymbolsIcon />}
              {index === 2 && <LibraryMusicIcon />}
              {index === 3 && <AlbumIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )
      )}
    </List>
  );
};

export default ListUser;

// <ListItem button key={text} onClick={() => Test0(index)}>
// <ListItemIcon>
//   {index === 0 && <QueueMusicIcon />}
//   {index === 1 && <EmojiSymbolsIcon />}
//   {index === 2 && <LibraryMusicIcon />}
//   {index === 3 && <AlbumIcon />}
// </ListItemIcon>
// <ListItemText primary={text} />
// </ListItem>

{
  /* <List>
{["Musicas", "Gêneros musicais", "Bandas", "Álbuns"].map((text, index) =>
  index === 0 ? (
    <ListItem button key={text} onClick={() => Test0(index)}>
      <ListItemIcon>
        <QueueMusicIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ) : index === 1 ? (
    <ListItem button key={text} onClick={() => Test0(index)}>
      <ListItemIcon>
        <LibraryMusicIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ) : index === 2 ? (
    <ListItem button key={text} onClick={() => Test0(index)}>
      <ListItemIcon>
        <EmojiSymbolsIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ) : (
    <ListItem button key={text} onClick={() => Test0(index)}>
      <ListItemIcon>
        <AlbumIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
)}
</List> */
}
