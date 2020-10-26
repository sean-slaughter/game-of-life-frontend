import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slider, Typography } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { changeSettings } from '../actions/gameActions'



function Settings(props) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(props.settings);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    props.history.push("/");
  };

  const handleChange = (e, newValue) => {
    setSettings({
      ...settings,
      [e.target.id]: newValue,
    });
  };

  const saveSettings = () => {
    props.changeSettings(settings);
    props.history.push("/");
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle>Edit the settings of your game grid:</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Typography id="row-size" gutterBottom>
              Rows:
            </Typography>
            <Grid item>
              <Slider
                aria-labelledby="row-size"
                max={80}
                min={10}
                step={5}
                value={settings.rows}
                id="rows"
                onChange={handleChange}
                style={{ width: 300 }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Typography id="col-size" gutterBottom>
              Columns:
            </Typography>
            <Grid item>
              <Slider
                aria-labelledby="col-size"
                max={80}
                min={10}
                step={5}
                value={settings.cols}
                id="cols"
                onChange={handleChange}
                style={{ width: 300 }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Typography id="cell-size" gutterBottom>
              Cell size:
            </Typography>
            <Grid item>
              <Slider
                aria-labelledby="cell-size"
                max={35}
                min={5}
                step={5}
                value={settings.cellSize}
                id="cellSize"
                onChange={handleChange}
                style={{ width: 300 }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Typography id="speed-val" gutterBottom>
              Speed
            </Typography>
            <Grid item>
              <Slider
                aria-labelledby="speed-val"
                max={500}
                min={20}
                step={20}
                value={settings.speed}
                id="speed"
                onChange={handleChange}
                style={{ width: 300 }}
              />
            </Grid>
          </Grid>
          <Typography variant="caption">
            Note that for speed you are setting the delay between generations
            <br />
            (Less = faster/more = slower)
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={saveSettings}>
            Save Settings
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};

export default connect(mapStateToProps, { changeSettings })(Settings);
