import React, { Component } from 'react'
import GameGrid from '../components/GameGrid'
import { connect } from 'react-redux'
import clickCell from '../actions/gridActions'

export class GridContainer extends Component {
  
    render() {
        return (
            <div className="grid-container">
                <GameGrid gridState={this.props.gridState} rows={this.props.rows} cols={this.props.cols} clickCell={this.props.clickCell}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
   return {
       gridState: state.gridState,
       rows: state.rows,
       cols: state.cols
   }
}

const mapDispatchToProps = dispatch => {
    return {
        clickCell: () => {dispatch(clickCell())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)

