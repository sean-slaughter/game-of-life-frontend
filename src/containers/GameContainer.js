import React, { Component } from 'react'
import GameGridInitial from '../components/GameGridInitial'
import { connect } from 'react-redux'
import {Grid, Button} from '@material-ui/core/'
import switchCell from '../actions/gridActions'
import GameGridPlaying from '../components/GameGridPlaying'
import { cyan } from '@material-ui/core/colors';


export class GridContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
                running: false,
            }
    }

    copyGrid(){
        return JSON.parse(JSON.stringify(this.props.initialGrid))
    }

    seedRandom(){
        
    }
  
    render() {
        return (
            <>
            <Grid container justify="center" alignItems="center">
            <div  className="grid-container" >
                {this.state.running ? <GameGridPlaying grid={this.copyGrid()}/> : <GameGridInitial/>  }
                 <Button size="large" variant="outlined" color="primary" onClick={this.playClick}>{this.state.running ? "Stop" : "Play"}</Button>
            </div>
            </Grid>        
            </>
        )
    }
    playClick = () =>{
        this.setState({
            running: !this.state.running
        })
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchCell: (row, col) => {dispatch(switchCell(row, col))}
    }
}

const mapStateToProps = state => {
   return {
       initialGrid: state.initialGrid,
       rows: state.rows,
       cols: state.cols,
       cellSize: state.cellSize
   }
}





export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)

