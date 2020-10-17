import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';


export class About extends Component {
    
    state = {
        open: false
    }
    
    componentDidMount(){
        this.setState({
            open: true
        })
    }

    render() {
        const { open } = this.state

        return (
            <Dialog onClose={this.handleClose} open={open}>
                <DialogTitle id="simple-dialog-title">
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

            </Dialog>
           
        )
    }
}

export default About
