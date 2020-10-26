import React, { Component } from "react";
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

// export class Cell extends Component {
//   handleClick = () => {
//     console.log(this.props.row, this.props.col);
//     this.props.switchCell(this.props.row, this.props.col);
//   };

//   render() {
//     return (
//       <div
//         style={{ width: this.props.cellSize, height: this.props.cellSize }}
//         className={this.props.cellState}
//         onClick={this.handleClick}
//       ></div>
//     );
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    switchCell: (row, col) => {
      dispatch(switchCell(row, col));
    },
  };
};

export default connect(null, mapDispatchToProps)(Cell);
