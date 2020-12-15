import React from "react";
import { connect } from "react-redux";
import { switchCell } from "../actions/gameActions";

function Cell(props) {
  const handleClick = () => {
    console.log(props.row, props.col);
    props.switchCell(props.row, props.col);
  };

  return (
    <div
      style={{ width: props.cellSize, height: props.cellSize }}
      className={props.cellState}
      onClick={handleClick}
    ></div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchCell: (row, col) => {
      dispatch(switchCell(row, col));
    },
  };
};

export default connect(null, mapDispatchToProps)(Cell);
