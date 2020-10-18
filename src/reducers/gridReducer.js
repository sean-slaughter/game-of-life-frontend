// initial state is 50x70 (possibly come back and edit this to add mobile support)
const genGrid = (rows, cols) =>{
  return Array(rows).fill().map(() => Array(cols).fill(false))
}

const initialState = {
  initialGrid: genGrid(50, 70),
  settings: {
    rows: 50,
    cols: 70,
    cellSize: 12,
    speed: 100
  }
};

const gridReducer = (state = initialState, action) => {
  const copyGrid = (gridState) => {
    return JSON.parse(JSON.stringify(gridState));
  };

  switch (action.type) {
    case "SWITCH_CELL":
      let copyGridState = copyGrid(state.initialGrid);
      copyGridState[action.row][action.col] = !copyGridState[action.row][action.col];
      return {
        ...state,
        initialGrid: copyGridState,
      };
      case 'CHANGE_SETTINGS':
        debugger
        return {
          ...state,
          initialGrid: genGrid(action.settings.rows, action.settings.cols),
          settings: action.settings
        };
    default:
      return state;

  }
};

export default gridReducer;
