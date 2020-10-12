import React, { Component } from 'react'
import Cell from './Cell'
export class GameGrid extends Component {

    render() {
        let gridArr = [];
        for(let i = 0; i < this.props.rows; i++){
           for(let j = 0; j < this.props.cols; j++){
               let cellState = this.props.gridState[i][j] ? "cell alive" : "cell dead"
               let id = i + "_" + j;  
               gridArr.push(<Cell cellState={cellState} id={id}/>)
           }
        }
        console.log(gridArr)
        return (
            <div className="grid">
                {gridArr}
            </div>
        )
    }
}

export default GameGrid
