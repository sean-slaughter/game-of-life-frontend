import React from "react";
import "./App.css";
import GameContainer from "./containers/GameContainer";
import Logo from "./components/Logo";
import cyan from "@material-ui/core/colors/cyan";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: cyan,
    },
  });

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Logo />
        <GameContainer />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
