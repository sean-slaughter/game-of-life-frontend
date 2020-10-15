import React, { Component } from 'react'
import Cell from './Cell'
import { connect } from 'react-redux'
export class GameGrid extends Component {

    render() {
        let gridArr = [];
        for(let i = 0; i < this.props.rows; i++){
           for(let j = 0; j < this.props.cols; j++){
               let cellState = this.props.gridState[i][j] ? "cell alive" : "cell dead"
               let id = i + "_" + j;  
               gridArr.push(<Cell cellState={cellState} key={id} id={id} row={i} col={j} clickCell={this.props.clickCell} cellSize={this.props.cellSize}/>)
           }
        }
        return (
            <div className="grid" style={{width: (this.props.cols * (this.props.cellSize + 1))}}>
                {gridArr}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        gridState: state.gridState,
        rows: state.rows,
        cols: state.cols,
        cellSize: state.cellSize
    }
 }
export default connect(mapStateToProps)(GameGrid)
