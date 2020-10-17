
export const switchCell = (row, col) => {
    return {
        type: 'SWITCH_CELL',
        row,
        col
    }
}

export const saveGame = (game) => {
    return (dispatch) => {
        fetch('backend_url', {
            header: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(game)
        })
        
    }
}
