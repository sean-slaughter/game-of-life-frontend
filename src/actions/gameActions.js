
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

export const loadGames = (games) => {
    return {
        type: "LOAD_GAMES",
        games
    }
}

export const fetchGames = () => {
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch('http://localhost3001/games')
        .then(resp => resp.json())
        .then(games => dispatch(loadGames(games)))
    }

}

export const saveGame = (game) => {
    return (dispatch) => {
        dispatch({type: "SAVING"})
        fetch('http://localhost:3001/games', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })
        .then(resp => resp.json())
        .then(newGame => console.log(newGame))
        
    }
}
