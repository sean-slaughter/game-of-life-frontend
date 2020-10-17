import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Button, Slide, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function About(){
    const [open, setOpen] = useState(false)

    const handleClose = () =>{
        setOpen(false)
    }

    useEffect(() => {
        setOpen(true)
    })

    return(
        <Dialog onClose={handleClose} transition={props =><Slide direction="left" {...props}/>}aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title" onClose={handleClose}>
                About Conways Game of Life
            </DialogTitle>
            <DialogContent dividers>
            <Typography gutterBottom>
                The Game of Life is a cellular automaton which was invented by
                mathematician John Conway.

                The game consists of a grid of cells which, based on a simple
                set of rules can either live, die, or reproduce.<br/><br/>
            </Typography>
            <Typography gutterBottom>
                <b>Rules:</b><br/>
            </Typography>
            <Typography gutterBottom>
                1. Any cell with less than two live neighbors dies,
                    as if by underpopulation.<br/><br/>

                2. Any cell with more than three live neighbors dies,
                    as if by over population.<br/><br/>

                3. Any cell with either two or three live neighbors
                    lives on to the next generation.<br/><br/>

                4. Any dead cell with three live neighbors becomes alive.<br/><br/>
            </Typography>
            <Typography gutterBottom>
                Click on cells on the grid to make patterns and then press 'Play'
                to begin the simulation!
            </Typography>
            
                <Link to='/'>
                <Button color="primary" variant="contained"onClick={handleClose}>Close</Button>
                </Link>
            </DialogContent>
            </Dialog>
    )
}
    
//     state = {
//         open: false,
//     }
    
//     componentDidMount(){
//         this.setState({
//             open: true,
//         })
//     }

//     handleClose(){
//         this.setState({
//             open: false
//         })
//     }
    
//     render() {
//         const { open } = this.state;
       

//         return (
           
//             <Dialog onClose={this.handleClose.bind(this)} open={open}>
//                 <DialogTitle id="simple-dialog-title">
//                     About Conways Game of Life
//                     <DialogContent>
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//                         Laudantium ea vel excepturi, atque iusto reiciendis soluta alias. 
//                         Nemo obcaecati eos ullam beatae, nihil, earum totam numquam autem excepturi, 
//                         alias inventore?

//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Sequi aliquam sapiente quia, incidunt consequatur dolor a 
//                         consectetur voluptates? Sapiente architecto dolorum molestiae vel 
//                         commodi provident veniam, esse autem eligendi velit.
//                     </DialogContent>
//                 </DialogTitle>
//                 <Button color="primary" variant="contained"onClick={this.handleClose.bind(this)}>Close</Button>
//             </Dialog>
            
//         )
//     }
// }

// export default About
