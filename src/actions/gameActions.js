
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

export const loadGame = (game_id) => {
    return {
        type: "LOAD_GAME",
        game_id
    }
}

export const fetchGames = () => {
    return (dispatch) => {
        //dispatch({type: "LOADING"})
        console.log("inside fetch games")
        fetch('https://st-game-of-life-api-herokuapp.com/games')
        .then(resp => resp.json())
        .then(games => {
            dispatch({type: "LOAD_GAMES", games})
            })
    }

}

export const saveGame = (game) => {
    return (dispatch) => {
        //dispatch({type: "SAVING"})
        fetch('https://st-game-of-life-api-herokuapp.com/games', {
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
