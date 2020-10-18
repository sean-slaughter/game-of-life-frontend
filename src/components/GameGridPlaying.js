import React, { Component } from "react";
import { connect } from "react-redux";
import Cell from "../components/Cell";
//import produce from "immer";
//import { useState, useEffect } from "react";

export class GameGridPlaying extends Component {
    
    constructor(props){
        super(props)
        this.grid = props.grid
    }


    copyGrid(){
        return JSON.parse(JSON.stringify(this.grid))
    }

    render() {
        console.log("render")
        let gridArr = [];
        for(let i = 0; i < this.props.rows; i++){
           for(let j = 0; j < this.props.cols; j++){
               let cellState = this.grid[i][j] ? "cell alive" : "cell dead"
               let id = i + "_" + j;  
               gridArr.push(<Cell cellState={cellState} key={id} row={i} col={j} cellSize={this.props.cellSize}/>)
           }
        }
        return (
            <div className="grid" style={{width: (this.props.cols * (this.props.cellSize + 1))}}>
                {gridArr}
            </div>
        )
    }

    componentDidMount(){
       this.interval = setInterval(this.play.bind(this), this.props.speed)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    getLiveNeighbors = (i , j) =>{
        const neighbors = [
            [0, 1],
            [0, -1],
            [1, -1],
            [-1, 1],
            [1, 1],
            [-1, -1],
            [1, 0],
            [-1, 0]
        ]
        let liveNeighbors = 0;
        for(let k = 0; k < neighbors.length; k++){
            const i2 = i + neighbors[k][0];
            const j2 = j + neighbors[k][1];
            if (i2 >= 0 && i2 < this.props.rows && j2 >=0 && j2 < this.props.cols){
                if(this.grid[i2][j2]){
                    liveNeighbors++;
                }
            }
        }
        return liveNeighbors
    }

    play(){
        let copyGrid = this.copyGrid(this.grid)
        for(let i = 0; i < this.props.rows; i++){
            for(let j = 0; j < this.props.cols; j++){
                const liveNeighbors = this.getLiveNeighbors(i, j);
                if(liveNeighbors < 2 || liveNeighbors > 3){
                    if(this.grid[i][j]){
                        copyGrid[i][j] = !copyGrid[i][j]
                    }
                }
                else if (!this.grid[i][j] && liveNeighbors === 3){
                    copyGrid[i][j] = !copyGrid[i][j]
                }
            }
        }
        this.grid = copyGrid;
        this.forceUpdate();
    }


}
const mapStateToProps = state => {
    return {
        rows: state.settings.rows,
        cols: state.settings.cols,
        cellSize: state.settings.cellSize,
        speed: state.settings.speed
    }
 }

export default connect(mapStateToProps)(GameGridPlaying)

// function GameGridPlaying(props) {

//   const [grid, setGrid] = useState(produce(props.grid, draft => {}));

//   useEffect(() => {
//     const interval = setInterval(play, props.speed);
//     return () => clearInterval(interval)
//   });

//   const GridArray = () => {
//     let gridArr = [];
//     for (let i = 0; i < props.rows; i++) {
//       for (let j = 0; j < props.cols; j++) {
//         let cellState = grid[i][j] ? "cell alive" : "cell dead";
//         let id = i + "_" + j;
//         gridArr.push(
//           <Cell
//             cellState={cellState}
//             key={id}
//             row={i}
//             col={j}
//             cellSize={props.cellSize}
//           />
//         );
//       }
//     }
//     return gridArr;
//   };
//   const getLiveNeighbors = (i, j) => {
//     const neighbors = [
//       [0, 1],
//       [0, -1],
//       [1, -1],
//       [-1, 1],
//       [1, 1],
//       [-1, -1],
//       [1, 0],
//       [-1, 0],
//     ];
//     let liveNeighbors = 0;
//     for (let k = 0; k < neighbors.length; k++) {
//       const i2 = i + neighbors[k][0];
//       const j2 = j + neighbors[k][1];
//       if (i2 >= 0 && i2 < props.rows && j2 >= 0 && j2 < props.cols) {
//         if (grid[i2][j2]) {
//           liveNeighbors++;
//         }
//       }
//     }
//     return liveNeighbors;
//   };

//     const play = () =>{
//         let copyGrid = produce(grid, newGrid => {
//             for(let i = 0; i < props.rows; i++){
//                 for(let j = 0; j < props.cols; j++){
//                     const liveNeighbors = getLiveNeighbors(i, j);
//                     if(liveNeighbors < 2 || liveNeighbors > 3){
//                         if(grid[i][j]){
//                             newGrid[i][j] = !grid[i][j]
//                         }
//                     }
//                     else if (grid[i][j] && liveNeighbors === 3){
//                             newGrid[i][j] = !grid[i][j]
//                     }
//                 }
//             }
//         })
//         setGrid(copyGrid)
//     }

//   return (
//   <div className="grid" style={{width: (props.cols * (props.cellSize + 1))}}>{GridArray()}</div>
//   );
// }


// export class GameGridPlaying extends Component {

//     constructor(props){
//         super(props)
//         this.grid = produce(props.grid, draft => {

//         })
//     }

//     render() {
//         debugger
//         console.log("render")
//         let gridArr = [];
//         for(let i = 0; i < this.props.rows; i++){
//            for(let j = 0; j < this.props.cols; j++){
//                let cellState = this.grid[i][j] ? "cell alive" : "cell dead"
//                let id = i + "_" + j;
//                gridArr.push(<Cell cellState={cellState} key={id} row={i} col={j} cellSize={this.props.cellSize}/>)
//            }
//         }
//         return (
//             <div className="grid" style={{width: (this.props.cols * (this.props.cellSize + 1))}}>
//                 {gridArr}
//             </div>
//         )
//     }

//     componentDidMount(){
//        this.interval = setInterval(this.play.bind(this), this.props.speed)
//     }

//     componentWillUnmount(){
//         clearInterval(this.interval)
//     }

//     getLiveNeighbors = (i , j) =>{
//         const neighbors = [
//             [0, 1],
//             [0, -1],
//             [1, -1],
//             [-1, 1],
//             [1, 1],
//             [-1, -1],
//             [1, 0],
//             [-1, 0]
//         ]
//         let liveNeighbors = 0;
//         for(let k = 0; k < neighbors.length; k++){
//             const i2 = i + neighbors[k][0];
//             const j2 = j + neighbors[k][1];
//             if (i2 >= 0 && i2 < this.props.rows && j2 >=0 && j2 < this.props.cols){
//                 if(this.grid[i2][j2]){
//                     liveNeighbors++;
//                 }
//             }
//         }
//         return liveNeighbors
//     }

//     play(){
//         let copyGrid;
//         for(let i = 0; i < this.props.rows; i++){
//             for(let j = 0; j < this.props.cols; j++){
//                 const liveNeighbors = this.getLiveNeighbors(i, j);
//                 if(liveNeighbors < 2 || liveNeighbors > 3){
//                     if(this.grid[i][j]){
//                         copyGrid = produce(this.grid, newGrid => {
//                             newGrid[i][j] = ![newGrid][i][j]
//                         })
//                     }
//                 }
//                 else if (!this.grid[i][j] && liveNeighbors === 3){
//                     copyGrid = produce(this.grid, newGrid => {
//                         newGrid[i][j] = ![newGrid][i][j]
//                     })
//                 }
//             }
//         }
//         this.grid = copyGrid
//         this.forceUpdate();
//     }

// }

