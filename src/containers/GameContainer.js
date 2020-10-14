import React, { Component } from 'react'
import GameGrid from '../components/GameGrid'
import { connect } from 'react-redux'
import clickCell from '../actions/gridActions'
import Grid from '@material-ui/core/Grid'
export class GridContainer extends Component {
  
    render() {
        return (
            <Grid container justify="center" alignItems="center">
            <div  className="grid-container" style={{width: this.props.cols * this.cellSize, height: this.props.rows * this.cellSize}} >
                <GameGrid/>
            </div>
            </Grid>
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

const mapDispatchToProps = dispatch => {
    return {
        clickCell: (id, row, col) => {dispatch(clickCell(id, row, col))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)

