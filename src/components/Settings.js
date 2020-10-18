import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'


function Settings(props) {

    const [open, setOpen] = useState(false)
    const [settings, setSettings] = useState(props.settings)

    useEffect(() => {
        setOpen(true)
    },[])


    const handleClose = () => {
        setOpen(false);
        props.history.push('/home')
      };

    const saveSettings = () => {
        
    }

    return (
         <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
            <DialogTitle>
                Edit the settings of your game grid:
            </DialogTitle>
            <DialogContent dividers>
                Content
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={saveSettings}>Save Settings</Button> 
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = state =>{
    return{
        rows: state.settings.rows,
        cols: state.settings.cols,
        speed: state.settings.speed,
        cellSize: state.settings.cellSize
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
