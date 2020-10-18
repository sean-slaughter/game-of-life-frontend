import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react/redux';
import { fetchGames } from '../actions/gameActions'


function GameList(props) {

    useEffect(props.fetchGames,[])

    return (
        <div>
            <Dialog>
                <DialogTitle>
                    List of Saved Games
                </DialogTitle>
                <DialogContent>
                    Games
                </DialogContent>
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
