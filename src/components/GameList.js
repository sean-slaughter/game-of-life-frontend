import {Dialog, DialogActions, DialogTitle, Button, Grid, TextField,} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { fetchGames } from "../actions/gameActions";
import Game from "./Game";

function GameList(props) {
  
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [renderGames, setRenderGames] = useState([])

  useEffect(() => {
    setOpen(true);
    props.fetchGames();
  }, []);

  useEffect(() => {
      setRenderGames(props.games)
  },[props.games])

  const handleClose = () => {
    setOpen(false);
    props.history.push("/");
  };
 
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = () => {
    setRenderGames(
        props.games.filter(game => game.name.includes(search))
    )
  }


  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <TextField style={{margin: 15}} onChange={handleSearchChange} value={search} label="Search for a game grid by name"/>
        <Button onClick={handleSearchSubmit} color="primary">Submit</Button>
        <DialogTitle>List of Saved Games</DialogTitle>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {renderGames.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              user={game.user}
              history={props.history}
            />
          ))}
        </Grid>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

export default connect(mapStateToProps, { fetchGames })(GameList);
