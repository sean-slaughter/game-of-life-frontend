
const initialState = {
   initialGrid: Array(40).fill().map(() => Array(60).fill(false)),
   rows: 40,
   cols: 60,
   cellSize:12
}


const gridReducer = (state = initialState, action) =>{

    const copyGrid = (gridState) =>{
        return JSON.parse(JSON.stringify(gridState))
    }

    switch(action.type){
        case 'SWITCH_CELL':
            let copyGridState = copyGrid(state.gridState)
            copyGridState[action.row][action.col] = !copyGridState[action.row][action.col]
            return {
                ...state,
                gridState: copyGridState
            }
        default:
            return state;
    }
}

export default gridReducer