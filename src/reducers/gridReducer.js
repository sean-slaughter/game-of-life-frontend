
const initialState = {
   gridState: Array(50).fill().map(() => Array(70).fill(false)),
   rows: 50,
   cols: 70,
   cellSize:12
}


const gridReducer = (state = initialState, action) =>{

    const copyGrid = (gridState) =>{
        return JSON.parse(JSON.stringify(gridState))
    }

    switch(action.type){
        case 'CLICK_CELL':
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