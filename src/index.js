import React, { Component} from "react";
import ReactDOM from "react-dom";

// import "./sass/index.scss";
// import "./res/styles/css/style.css";
import "./res/styles/icon-font.css";

import Home from "./pages/Home";

console.log("%cReact Exists @JackieP", "color: yellow; font-size: 20px");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
