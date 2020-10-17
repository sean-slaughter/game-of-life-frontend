import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react'

function SaveForm() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };
  
    useEffect(() => {
      setOpen(true);
    });

    const handleSave = () =>{

    }


    return (
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle>Save your grid state.</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Like the inital grid state you've created? Save it for others to
              see.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="gridName"
              label="Name your grid:"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your name:"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default SaveForm
