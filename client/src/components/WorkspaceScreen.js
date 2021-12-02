import { useContext, useState } from "react";
import Top5Item from "./Top5Item.js";
import List from "@mui/material/List";
import { Typography } from "@mui/material";
import { GlobalStoreContext } from "../store/index.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

/*
    This React component lets us edit a loaded list, which only
    happens when we are on the proper route.
    
    @author McKilla Gorilla
*/
function WorkspaceScreen() {
  const { store } = useContext(GlobalStoreContext);

  let top5List = store.currentList;

  //Each of these keep track of the current text in each respective text box
  const [list, setList] = useState(top5List.name);
  const [item1, setItem1] = useState(top5List.items[0]);
  const [item2, setItem2] = useState(top5List.items[1]);
  const [item3, setItem3] = useState(top5List.items[2]);
  const [item4, setItem4] = useState(top5List.items[3]);
  const [item5, setItem5] = useState(top5List.items[4]);

  // Response for when a keyboard key is pressed for list
  function handleUpdateList(event) {
    setList(event.target.value);
  }

  // Response for when a keyboard key is pressed for item 1
  function handleUpdateItem1(event) {
    setItem1(event.target.value);
  }

  // Response for when a keyboard key is pressed for item 2
  function handleUpdateItem2(event) {
    setItem2(event.target.value);
  }

  // Response for when a keyboard key is pressed for item 3
  function handleUpdateItem3(event) {
    setItem3(event.target.value);
  }

  // Response for when a keyboard key is pressed for item 4
  function handleUpdateItem4(event) {
    setItem4(event.target.value);
  }

  // Response for when a keyboard key is pressed for item 5
  function handleUpdateItem5(event) {
    setItem5(event.target.value);
  }

  // Response to when one saves the currently edited list
  function handleSave(event) {
    let name = list;
    let items = [item1, item2, item3, item4, item5];

    store.saveList(name, items);
  }

  //response to when one publishes the current list
  function handlePublish() {
    let name = list;
    let items = [item1, item2, item3, item4, item5];
    store.publishList(name, items);
  }

  return (
    <div>
      <TextField
        label="List Name"
        sx={{ width: "50%" }}
        margin="normal"
        id={"name"}
        name="name"
        defaultValue={top5List.name}
        onChange={handleUpdateList}
        inputProps={{ style: { fontSize: 14 } }}
        InputLabelProps={{ style: { fontSize: 14 } }}
      />
      <div className="item-number">
        <Typography variant="h3">1.</Typography>
        <TextField
          label="Item 1"
          sx={{ width: "100%" }}
          margin="normal"
          id={"item 1"}
          name="item 1"
          defaultValue={top5List.items[0]}
          onChange={handleUpdateItem1}
          inputProps={{ style: { fontSize: 18 } }}
          InputLabelProps={{ style: { fontSize: 18 } }}
        />
      </div>
      <div className="item-number">
        <Typography variant="h3">2.</Typography>
        <TextField
          label="Item 2"
          sx={{ width: "100%" }}
          margin="normal"
          id={"item 2"}
          name="item 2"
          defaultValue={top5List.items[1]}
          onChange={handleUpdateItem2}
          inputProps={{ style: { fontSize: 18 } }}
          InputLabelProps={{ style: { fontSize: 18 } }}
        />
      </div>
      <div className="item-number">
        <Typography variant="h3">3.</Typography>
        <TextField
          label="Item 3"
          sx={{ width: "100%" }}
          margin="normal"
          id={"item 3"}
          name="item 3"
          defaultValue={top5List.items[2]}
          onChange={handleUpdateItem3}
          inputProps={{ style: { fontSize: 18 } }}
          InputLabelProps={{ style: { fontSize: 18 } }}
        />
      </div>
      <div className="item-number">
        <Typography variant="h3">4.</Typography>
        <TextField
          label="Item 4"
          sx={{ width: "100%" }}
          margin="normal"
          id={"item 4"}
          name="item 4"
          defaultValue={top5List.items[3]}
          onChange={handleUpdateItem4}
          inputProps={{ style: { fontSize: 18 } }}
          InputLabelProps={{ style: { fontSize: 18 } }}
        />
      </div>
      <div className="item-number">
        <Typography variant="h3">5.</Typography>
        <TextField
          label="Item 5"
          sx={{ width: "100%" }}
          margin="normal"
          id={"item 5"}
          name="item 5"
          defaultValue={top5List.items[4]}
          onChange={handleUpdateItem5}
          inputProps={{ style: { fontSize: 18 } }}
          InputLabelProps={{ style: { fontSize: 18 } }}
        />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={10}></Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 2, minHeight: "75px" }}
            onClick={(event) => {
              handleSave();
            }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 2, minHeight: "75px" }}
            onClick={(event) => {
              handlePublish();
            }}
          >
            Publish
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default WorkspaceScreen;
