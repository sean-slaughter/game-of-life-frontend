import React, { Component } from 'react'
import GameGrid from '../components/GameGrid'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
export class GridContainer extends Component {
  
    render() {
        return (
            <>
            <Grid container justify="center" alignItems="center">
            <div  className="grid-container" >
                <GameGrid />
            </div>
            </Grid>
            <button>Play</button>
            </>
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



export default connect(mapStateToProps)(GridContainer)

