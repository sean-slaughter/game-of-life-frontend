import React, { Component } from 'react'

export class Cell extends Component {
    handleClick = () => {
        this.props.clickCell(this.props.id)
    }
    
    render() {
        return (
            <div className={this.props.cellState} id={this.props.id} onClick={this.handleClick}></div>
        )
    }
}

export default Cell
