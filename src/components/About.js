import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Button, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import underpopulation from "../underpopulation.png";
import overpopulation from "../overpopulation.png";
import reproduce from "../reproduce.png";
import live_son from "../lives_on.png";

export default function About() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  });

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
            <img className="about" src={underpopulation} />
          </Grid>
          <br />
          2. Any cell with more than three live neighbors dies, as if by over
          population.
          <br />
          <Grid container justify="center">
            <img className="about" src={overpopulation} />
          </Grid>
          <br />
          3. Any cell with either two or three live neighbors lives on to the
          next generation.
          <br />
          <Grid container justify="center">
            <img className="about" src={live_son} />
          </Grid>
          <br />
          4. Any dead cell with three live neighbors becomes alive, as if by reproduction.
          <br />
          <Grid container justify="center">
            <img className="about" src={reproduce} />
          </Grid>
          <br />
        </Typography>
        <Typography gutterBottom>
          Click on cells on the grid to make patterns and then press 'Play' to
          begin the simulation! If you like what you create, feel free to name it and save it!
        </Typography>
        <Link to="/">
          <Grid container justify="center">
            <Button color="primary" variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Grid>
        </Link>
      </DialogContent>
    </Dialog>
  );
}
