import React, { Component } from 'react'
import GameGrid from '../components/GameGrid'

export class GridContainer extends Component {
    constructor(props){
        super(props)
        this.rows = 50;
        this.cols = 80;
        this.state = {
            gridState: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }
    render() {
        return (
            <div className="grid-container">
                Game Container
                <GameGrid gridState={this.state.gridState} rows={this.rows} cols={this.cols}/>
            </div>
        )
    }
}

export default GridContainer

