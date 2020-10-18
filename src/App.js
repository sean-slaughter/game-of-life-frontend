import React from "react";
import "./App.css";
import cyan from "@material-ui/core/colors/cyan";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import About from "./components/About";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import SaveForm from "./components/SaveForm";
import Settings from "./components/Settings";

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
            <Route path="/settings" component={Settings}/>
        </MuiThemeProvider>
      </div>
    </>
  );
}



export default App;
