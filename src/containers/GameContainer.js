import React, { Component } from 'react'
import GameGridInitial from '../components/GameGridInitial'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import switchCell from '../actions/gridActions'
import GameGridPlaying from '../components/GameGridPlaying'

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
  
    render() {
        return (
            <>
            <Grid container justify="center" alignItems="center">
            <div  className="grid-container" >
                {this.state.running ? <GameGridPlaying grid={this.copyGrid()} running={this.state.running}/> : <GameGridInitial/>  }
            </div>
            </Grid>        
            </>
        )
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

