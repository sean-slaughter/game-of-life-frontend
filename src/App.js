import React from "react";
import "./App.css";
import cyan from "@material-ui/core/colors/cyan";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import About from "./components/About";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import SaveForm from "./components/SaveForm";
import Settings from "./components/Settings";
import { connect } from 'react-redux';

function App(props) {
  const theme = createMuiTheme({
    palette: {
      primary: cyan,
    },
  });

  return (
    <>
      <div className="App">
        <MuiThemeProvider theme={theme}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/games/new" component={SaveForm}/>
            <Route path="/settings" render={() => <Settings settings={props.settings}/> }/>
        </MuiThemeProvider>
      </div>
    </>
  );
}

const mapStateToProps = state =>{
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(App);
