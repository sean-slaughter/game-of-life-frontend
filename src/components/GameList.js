import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGames } from '../actions/gameActions'
import Game from './Game';


function GameList(props) {

    const [open, setOpen] = useState(false);


    useEffect(() => {
        setOpen(true);
        props.fetchGames();
    },[])

    const handleClose = () => {
        setOpen(false);
        props.history.push('/')
      };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>
                    List of Saved Games
                </DialogTitle>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    {props.games.map(game => <Game key={game.id} id={game.id} name={game.name} user={game.user} history={props.history}/>) }
                </Grid>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Back</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
}


export default connect(mapStateToProps, { fetchGames })(GameList)
