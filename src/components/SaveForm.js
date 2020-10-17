import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function SaveForm() {
    const [open, setOpen] = useState(false);
    const [gridName, setGridName] = useState("");
    const [name, setName] = useState("");

    const handleClose = () => {
      setOpen(false);
    };
  
    useEffect(() => {
      setOpen(true);
    });

    const handleSubmit = () =>{

    }

    const handleGridChange = (e) =>{
        setGridName(e.target.value)
    }

    const handleNameChange = (e) =>{
        setName(e.target.value)
    }

    return (
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle>Save your game.</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Like the inital grid state you've created? Save it for others to
              see, or come back to it later.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="gridName"
              label="Name your grid:"
              type="text"
              fullWidth
              onChange={handleGridChange}
              value={gridName}
              required={true}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your name:"
              type="text"
              fullWidth
              onChange={handleNameChange}
              value={name}
              required={true}
            />
          </DialogContent>
          <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
          <Link to="/home">
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
          </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default SaveForm
