import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Button, Slide } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';


export default function About(){
    const [open, setOpen] = useState(false)

    const handleClose = () =>{
        setOpen(false)
    }

    useEffect(() => {
        setOpen(true)
    })

    return(
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle id="simple-dialog-title" onClose={handleClose}>
            About Conways Game of Life
            <DialogContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Laudantium ea vel excepturi, atque iusto reiciendis soluta alias. 
                Nemo obcaecati eos ullam beatae, nihil, earum totam numquam autem excepturi, 
                alias inventore?

                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sequi aliquam sapiente quia, incidunt consequatur dolor a 
                consectetur voluptates? Sapiente architecto dolorum molestiae vel 
                commodi provident veniam, esse autem eligendi velit.
            </DialogContent>
        </DialogTitle>
        <Button color="primary" variant="contained"onClick={handleClose}>Close</Button>
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
