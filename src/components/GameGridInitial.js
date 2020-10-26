import React, { Component } from 'react'
import Cell from './Cell'
import { connect } from 'react-redux'

function GameGridInitial(props) {
  let gridArr = [];
  for (let i = 0; i < props.rows; i++) {
    for (let j = 0; j < props.cols; j++) {
      let cellState = props.initialGrid[i][j] ? "cell alive" : "cell dead";
      let id = i + "_" + j;
      gridArr.push(
        <Cell
          cellState={cellState}
          key={id}
          row={i}
          col={j}
          cellSize={props.cellSize}
        />
      );
    }
  }
  return (
    <div className="grid" style={{ width: props.cols * (props.cellSize + 1) }}>
      {gridArr}
    </div>
  );
}
// export class GameGridInitial extends Component {

//     render = () => {
//         let gridArr = [];
//         for(let i = 0; i < this.props.rows; i++){
//            for(let j = 0; j < this.props.cols; j++){
//                let cellState = this.props.initialGrid[i][j] ? "cell alive" : "cell dead"
//                let id = i + "_" + j;  
//                gridArr.push(<Cell cellState={cellState} key={id} row={i} col={j} cellSize={this.props.cellSize}/>)
//            }
//         }
//         return (
//             <div className="grid" style={{width: (this.props.cols * (this.props.cellSize + 1))}}>
//                 {gridArr}
//             </div>
//         )
//     }
// }
const mapStateToProps = state => {
    return {
        initialGrid: state.initialGrid,
        rows: state.settings.rows,
        cols: state.settings.cols,
        cellSize: state.settings.cellSize
    }
 }
export default connect(mapStateToProps)(GameGridInitial)
