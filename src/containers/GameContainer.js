import React, { Component } from 'react'
import GameGrid from '../components/GameGrid'
import { connect } from 'react-redux'

export class GridContainer extends Component {
  
    render() {
        return (
            <div className="grid-container">
                Game Container
                <GameGrid gridState={this.props.gridState} rows={this.props.rows} cols={this.props.cols}/>
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

}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)

