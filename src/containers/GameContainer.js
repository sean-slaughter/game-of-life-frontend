import React, { Component } from 'react'
import GameGrid from '../components/GameGrid'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import switchCell from '../actions/gridActions'

export class GridContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
                running: false,
            }
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
  
    render() {
        return (
            <>
            <Grid container justify="center" alignItems="center">
            <div  className="grid-container" >
                <GameGrid />
            </div>
            </Grid>
        <button onClick={this.handleButtonClick}>{this.state.running ? "Stop" : "Play"}</button>
            </>
        )
    }
    
    handleButtonClick = () => {
        this.setState({
            running: !this.state.running
        }, this.play)
    }

    play(){
        if(!this.state.running){
            return;
        }
        for(let i = 0; i < this.props.rows; i++){
            for(let j = 0; j < this.props.cols; j++){
                let liveNeighbors = 0;
                for(let k = 0; k < this.neighbors.length; k++){
                    const i2 = i + this.neighbors[k][0];
                    const j2 = j + this.neighbors[k][1];
                    if (i2 >= 0 && i2 < this.props.rows && j2 >=0 && j2 < this.props.cols){
                        if(this.props.gridState[i2][j2]){
                            liveNeighbors++;
                        }
                    }
                }
                if(liveNeighbors < 2 || liveNeighbors > 3){
                    this.props.switchCell(i, j)
                }
                else if (!this.props.gridState[i][j] && liveNeighbors === 3){
                    this.props.switchCell(i, j)
                }
            }
        }
        
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        switchCell: (row, col) => {dispatch(switchCell(row, col))}
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



export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)

