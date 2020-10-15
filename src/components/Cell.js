import React, { Component } from 'react'
import { connect } from 'react-redux'
import clickCell from '../actions/gridActions'


export class Cell extends Component {


    handleClick = () => {
        this.props.clickCell(this.props.id, this.props.row, this.props.col)
    }
    
    render() {
        return (
            <div style={{width: this.props.cellSize, height: this.props.cellSize}} className={this.props.cellState} id={this.props.id} onClick={this.handleClick}></div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickCell: (id, row, col) => {dispatch(clickCell(id, row, col))}
    }
}

export default connect(null, mapDispatchToProps)(Cell) 
