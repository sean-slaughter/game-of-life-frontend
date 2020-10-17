import React, { Component } from 'react'
import { connect } from 'react-redux'
import { switchCell } from '../actions/gridActions'


export class Cell extends Component {


    handleClick = () => {
        console.log(this.props.row, this.props.col)
        this.props.switchCell(this.props.row, this.props.col)
    }
    
    render() {
        return (
            <div style={{width: this.props.cellSize, height: this.props.cellSize}} className={this.props.cellState} onClick={this.handleClick}></div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchCell: (row, col) => {dispatch(switchCell(row, col))}
    }
}

export default connect(null, mapDispatchToProps)(Cell) 
