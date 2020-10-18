
export const switchCell = (row, col) => {
    return {
        type: 'SWITCH_CELL',
        row,
        col
    }
}

export const changeSettings = (settings) => {
    return {
        type: 'CHANGE_SETTINGS',
        settings
    }
}

export const saveGame = (game, history) => {
    return (dispatch) => {
        fetch('http://localhost:3001/games', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })
        .then(resp => resp.json())
        .then(game => console.log(game))
        
    }
}
