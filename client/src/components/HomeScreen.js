import React, { useContext, useEffect, useState } from "react";
import { GlobalStoreContext } from "../store";
import ListCard from "./ListCard.js";
import MUIDeleteModal from "./MUIDeleteModal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import FunctionsIcon from "@mui/icons-material/Functions";
import TextField from "@mui/material/TextField";
import SortIcon from "@mui/icons-material/Sort";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";

import Grid from "@mui/material/Grid";

import AuthContext from "../auth";

/*
    This React component lists all the top5 lists in the UI.
    
    @author McKilla Gorilla
*/
const HomeScreen = () => {
  const { store } = useContext(GlobalStoreContext);

  //Keeps track if a list is currently being edited
  const [editActive, setEditActive] = useState(false);

  //Keeps track of current search
  const [search, setSearch] = useState("");

  const { auth } = useContext(AuthContext);

  function handleUpdateSearch(event) {
    setSearch(event.target.value);
  }
  function handleKeyPress(event) {
    if (event.code === "Enter") {
      let text = event.target.value;
      // store.newSearch(text);
    }
  }

  function changeLists(event, view) {
    event.stopPropagation();
    store.newSearch("");
  }

  let listCard = <List></List>;
  if (store.currentLists) {
    listCard = (
      <List sx={{ height: "50%", marginTop: "20px" }}>
        {store.currentLists.map((list) => (
          <ListCard top5List={list} />
        ))}
      </List>
    );
  }
  return (
    <Box sx={{ height: "75%", bgcolor: "yellow" }}>
      <Box sx={{ height: "25%" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <IconButton
              aria-label="your lists"
              color="primary"
              onClick={(event) => {
                changeLists(event, "yours");
              }}
            >
              <HomeIcon
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
            </IconButton>
            <IconButton aria-label="all lists" color="primary" size="large">
              <PeopleIcon
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
            </IconButton>
            <IconButton aria-label="user lists" color="primary" size="large">
              <PersonIcon
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
            </IconButton>
            <IconButton
              aria-label="community lists"
              color="primary"
              size="large"
            >
              <FunctionsIcon
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
            </IconButton>
            <TextField
              label="Search"
              sx={{ width: "50%" }}
              margin="normal"
              id={"search"}
              name="search"
              onKeyPress={handleKeyPress}
              onChange={handleUpdateSearch}
              inputProps={{ style: { fontSize: 18 } }}
              InputLabelProps={{ style: { fontSize: 18 } }}
            />
          </Grid>
          <Grid item xs={2} align="right">
            <Typography display="inline" variant="h4">
              Sort by
            </Typography>
            <IconButton aria-label="sort" color="primary" size="large">
              <SortIcon
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: "50%", bgcolor: "purple" }}>
        <div id="list-selector-list">
          {listCard}
          <MUIDeleteModal />
        </div>
      </Box>
    </Box>
  );
};

export default HomeScreen;
