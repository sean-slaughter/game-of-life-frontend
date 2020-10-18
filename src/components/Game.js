import { Button, DialogContent, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { loadGame } from '../actions/gameActions'
import { connect } from 'react-redux';

function Game(props) {

    const handleClick = () => {
        props.loadGame(props.id)
    }

    return (
        <Grid item style={{padding: 20}}>
            <DialogContent dividers>
            <Paper style={{ padding: 20}} elevation={3}>
                <Typography gutterBottom>
                    <b>{props.name}</b>
                </Typography>
                <Typography variant="overline" gutterBottom>
                   Created by: {props.user}
                </Typography>
                <Button onClick={handleClick}variant="contained" color="primary" >Load Game</Button>
            </Paper>
            </DialogContent>
        </Grid>
    )
}

export default connect(null, { loadGame })(Game)

