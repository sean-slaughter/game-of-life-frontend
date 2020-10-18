import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Button, DialogActions, Grid, Typography } from "@material-ui/core";
import underpopulation from "../underpopulation.png";
import overpopulation from "../overpopulation.png";
import reproduce from "../reproduce.png";
import live_son from "../lives_on.png";

export default function About(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    props.history.push('/')
  };

  useEffect(() => {
    setOpen(true);
  },[]);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title" onClose={handleClose}>
        About the "Game of Life"
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          The Game of Life is a cellular automaton, invented by mathematician
          John Conway (who passed away in April 2020 due to COVID-19
          complications). The "game" consists of a grid of cells, which based on
          a simple set of rules can either live, die, or reproduce.
          <br />
          <br />
        </Typography>
        <Typography gutterBottom>
          <b>Rules:</b>
          <br />
        </Typography>
        <Typography gutterBottom>
          1. Any cell with less than two live neighbors dies, as if by
          underpopulation.
          <br />
          <Grid container justify="center">
            <img alt="example" className="about" src={underpopulation} />
          </Grid>
          <br />
          2. Any cell with more than three live neighbors dies, as if by over
          population.
          <br />
          <Grid container justify="center">
            <img alt="example" className="about" src={overpopulation} />
          </Grid>
          <br />
          3. Any cell with either two or three live neighbors lives on to the
          next generation.
          <br />
          <Grid container justify="center">
            <img alt="example" className="about" src={live_son} />
          </Grid>
          <br />
          4. Any dead cell with three live neighbors becomes alive, as if by reproduction.
          <br />
          <Grid container justify="center">
            <img alt="example" className="about" src={reproduce} />
          </Grid>
          <br />
        </Typography>
        <Typography gutterBottom>
          Clicking on a cell on the grid will either bring it to life(blue) or kill it (grey).
          Set an initial state to the grid and then press 'Play' to
          begin the simulation! You can also customize your grid settings such as speed (delay between generations),
          number of columns, number of rows, and cell size. 
          If you like what you create, feel free to name your initial state and save it!
        </Typography>
      </DialogContent>
      <DialogActions>
            <Button color="primary" onClick={handleClose}>
              Close
            </Button>
      </DialogActions>
    </Dialog>
  );
}
