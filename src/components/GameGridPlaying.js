import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cell from '../components/Cell'


export class GameGridPlaying extends Component {
    
    constructor(props){
        super(props)
        this.grid = props.grid
        this.neighbors = [
            [0, 1],
            [0, -1],
            [1, -1],
            [-1, 1],
            [1, 1],
            [-1, -1],
            [1, 0],
            [-1, 0]
        ]
    }


    copyGrid(){
        return JSON.parse(JSON.stringify(this.grid))
    }

    render() {
        console.log("render")
        let gridArr = [];
        for(let i = 0; i < this.props.rows; i++){
           for(let j = 0; j < this.props.cols; j++){
               let cellState = this.grid[i][j] ? "cell alive" : "cell dead"
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

    componentDidMount(){
       this.interval = setInterval(this.play.bind(this), 50)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    getLiveNeighbors = (i , j) =>{
        let liveNeighbors = 0;
        for(let k = 0; k < this.neighbors.length; k++){
            const i2 = i + this.neighbors[k][0];
            const j2 = j + this.neighbors[k][1];
            if (i2 >= 0 && i2 < this.props.rows && j2 >=0 && j2 < this.props.cols){
                if(this.grid[i2][j2]){
                    liveNeighbors++;
                }
            }
        }
        return liveNeighbors
    }

    play(){
        let copyGrid = this.copyGrid(this.grid)
        for(let i = 0; i < this.props.rows; i++){
            for(let j = 0; j < this.props.cols; j++){
                const liveNeighbors = this.getLiveNeighbors(i, j);
                if(liveNeighbors < 2 || liveNeighbors > 3){
                    if(this.grid[i][j]){
                        copyGrid[i][j] = !copyGrid[i][j]
                    }
                }
                else if (!this.grid[i][j] && liveNeighbors === 3){
                    copyGrid[i][j] = !copyGrid[i][j]
                }
            }
        }
        this.grid = copyGrid;
        this.forceUpdate();
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
