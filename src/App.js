import React from "react";
import "./App.css";
import GameContainer from "./containers/GameContainer";
import Logo from "./components/Logo";
import cyan from "@material-ui/core/colors/cyan";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SaveForm from "./components/SaveForm";

function App() {
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
        </MuiThemeProvider>
      </div>
    </>
  );
}

export default App;
