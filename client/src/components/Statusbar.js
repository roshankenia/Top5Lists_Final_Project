import { useContext } from "react";
import { GlobalStoreContext } from "../store";
import { Typography } from "@mui/material";
import AuthContext from "../auth";


/*
    Our Status bar React component goes at the bottom of our UI.
    
    @author McKilla Gorilla
*/
function Statusbar() {
  const { store } = useContext(GlobalStoreContext);
  const { auth } = useContext(AuthContext);

  let text = "";
  if (store.currentList) text = store.currentList.name;

  if (!store.isGuest && !auth.loggedIn) {
    return (
      <div id="top5-statusbar">
        <Typography
          align="right"
          variant="body1"
          gutterBottom
          alignSelf="flex-end"
        >
          Developed by Roshan Kenia
        </Typography>
      </div>
    );
  } else {
    return (
      <div id="top5-statusbar">
        <Typography variant="h4">{text}</Typography>
      </div>
    );
  }
}

export default Statusbar;
