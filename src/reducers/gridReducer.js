
const initialState = {
   gridState: Array(100).fill().map(() => Array(50).fill(false)),
   rows: 100,
   cols: 50
}


const gridReducer = (state = initialState, action) =>{
    switch(action.type){

        default:
            return state;
    }
}

export default gridReducer