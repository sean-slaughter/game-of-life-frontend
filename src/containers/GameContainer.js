import React, { Component } from 'react'
import GameGrid from '../components/GameGrid'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
export class GridContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
                running: false,
            }
    }
  
    render() {
        return (
            <>
            <Grid container justify="center" alignItems="center">
            <div  className="grid-container" >
                <GameGrid />
            </div>
            </Grid>
        <button onClick={this.handleButtonClick}>{this.state.running ? "Stop" : "Play"}</button>
            </>
        )
    }
    
    handleButtonClick = () => {
        this.setState({
            running: !this.state.running
        }, this.play)
    }

    play(){
        if(this.state.running){
            console.log(this.props.gridState)
        }
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

