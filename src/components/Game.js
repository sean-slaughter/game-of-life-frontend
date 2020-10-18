import { Button, DialogContent, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

function Game(props) {
    return (
        <Grid item style={{padding: 20}}>
            <DialogContent >
            <Paper style={{ padding: 20}} elevation={3}>
                <Typography>
                   Name: {props.name}
                </Typography>
                <Typography>
                   Created by: {props.user}
                </Typography>
                <Button variant="contained" color="primary" >Load Game</Button>
            </Paper>
            </DialogContent>
        </Grid>
    )
}

export default Game

