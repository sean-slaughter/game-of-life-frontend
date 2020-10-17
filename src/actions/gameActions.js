
export const switchCell = (row, col) => {
    return {
        type: 'SWITCH_CELL',
        row,
        col
    }
}

export const saveGame = (game) => {
    return {
        type: "SAVE_GAME",
        game
    }
}
