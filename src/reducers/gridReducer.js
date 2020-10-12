
const initialState = {
   gridState: Array(100).fill().map(() => Array(50).fill(false)),
   rows: 100,
   cols: 50
}


const gridReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'CLICK_CELL':
            let copyGridState = copyGridState(state.gridState)
            return state
        default:
            return state;
    }
}

const copyGridState = (gridState) =>{
    return JSON.parse(JSON.stringify(gridState))
}

export default gridReducer