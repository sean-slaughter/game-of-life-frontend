import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'


function Settings(props) {

    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        setOpen(true)
    },[])

    return (
      <>
        <Dialog>
            <DialogTitle>
                Title
            </DialogTitle>
            <DialogContent>
                Content
            </DialogContent>
            <DialogActions>
                Actions
            </DialogActions>
        </Dialog>
      </>
    )
}

const mapStateToProps = state =>{
    return{

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
