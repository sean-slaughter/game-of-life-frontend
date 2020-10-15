import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cell from '../components/Cell'


export class GameGridPlaying extends Component {
    
    state = {
        grid: this.props.grid,
        running: this.props.running
    }

    copyGrid(){
        return JSON.parse(JSON.stringify(this.props.initialGrid))
    }

    render() {
        let gridArr = [];
        for(let i = 0; i < this.props.rows; i++){
           for(let j = 0; j < this.props.cols; j++){
               let cellState = this.state.grid[i][j] ? "cell alive" : "cell dead"
               let id = i + "_" + j;  
               gridArr.push(<Cell cellState={cellState} key={id} row={i} col={j} cellSize={this.props.cellSize}/>)
           }
        }
        return (
            <div className="grid" style={{width: (this.props.cols * (this.props.cellSize + 1))}}>
                {gridArr}
            </div>
        )
    }


    getLiveNeighbors(i , j){
        let liveNeighbors = 0;
        for(let k = 0; k < this.neighbors.length; k++){
            const i2 = i + this.neighbors[k][0];
            const j2 = j + this.neighbors[k][1];
            if (i2 >= 0 && i2 < this.props.rows && j2 >=0 && j2 < this.props.cols){
                if(this.state.grid[i2][j2]){
                    liveNeighbors++;
                }
            }
        }
        return liveNeighbors
    }

    play(){
        if(!this.state.running){
            return;
        }
        for(let i = 0; i < this.props.rows; i++){
            for(let j = 0; j < this.props.cols; j++){
                const liveNeighbors = this.getLiveNeighbors(i, j);
                if(liveNeighbors < 2 || liveNeighbors > 3){
                    if(this.state.grid[i][j]){
                        const copyGrid = this.copyGrid(this.state.grid)
                        this.setState({
                            grid: copyGrid
                        })
                    }
                }
                else if (!this.state.grid[i][j] && liveNeighbors === 3){
                    const copyGrid = this.copyGrid(this.state.grid)
                    this.setState({
                        grid: copyGrid
                    })
                }
            }
        }
        this.play.bind(this)
    }

}
const mapStateToProps = state => {
    return {
        rows: state.rows,
        cols: state.cols,
        cellSize: state.cellSize
    }
 }

export default connect(mapStateToProps)(GameGridPlaying)
