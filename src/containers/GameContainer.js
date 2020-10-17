import React, { Component } from "react";
import GameGridInitial from "../components/GameGridInitial";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core/";
import { switchCell } from "../actions/gameActions";
import GameGridPlaying from "../components/GameGridPlaying";
import { Link } from "react-router-dom";

export class GridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
    };
  }

  copyGrid() {
    return JSON.parse(JSON.stringify(this.props.initialGrid));
  }

  seedRandom() {}

  render() {
    return (
      <>
        <Grid container justify="center" alignItems="center">
          <Link to="/about">
            <Button color="primary" size="large" variant="outlined">
              About
            </Button>
          </Link>
          <Link to="/games">
            <Button color="primary" size="large" variant="outlined">
              Saved Games
            </Button>
          </Link>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            onClick={this.playClick}
          >
            {this.state.running ? "Stop" : "Play"}
          </Button>
          <Link to="/games/new">
            <Button color="primary" size="large" variant="outlined">
              SAVE
            </Button>
          </Link>
        </Grid>

        <Grid container justify="center" alignItems="center">
          <div className="grid-container">
            {this.state.running ? (
              <GameGridPlaying grid={this.copyGrid()} />
            ) : (
              <GameGridInitial />
            )}
          </div>
        </Grid>
      </>
    );
  }
  playClick = () => {
    this.setState({
      running: !this.state.running,
    });
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchCell: (row, col) => {
      dispatch(switchCell(row, col));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    initialGrid: state.initialGrid,
    rows: state.settings.rows,
    cols: state.settings.cols,
    cellSize: state.settings.cellSize,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
