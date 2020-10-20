function genGrid(rows, cols) {
  return Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));
}

const initialState = {
  initialGrid: genGrid(50, 70),
  settings: {
    rows: 50,
    cols: 70,
    cellSize: 12,
    speed: 100,
  },
  games: []
};

const gameReducer = (state = initialState, action) => {
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
    case "LOAD_GAMES":
      return {
        ...state,
        games: action.games
      }
    case "LOAD_GAME":
      const game = state.games.find(game => game.id === action.game_id)
      console.log(game)
      return{
        initialGrid: game.grid,
        settings: {
          rows: parseInt(game.settings.rows),
          cols: parseInt(game.settings.cols),
          speed: parseInt(game.settings.speed),
          cellSize: parseInt(game.settings.cellSize)
        },
        games: [...state.games]
      }
    case "CHANGE_SETTINGS":
      return {
        ...state,
        initialGrid: genGrid(action.settings.rows, action.settings.cols),
        settings: action.settings,
      };

    default:
      return state;
  }
};

export default gameReducer;
