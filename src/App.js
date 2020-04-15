import React from "react";
import "./styles.css";

export default function App() {
  invokedOnClick = value => {
    console.log(value);
  };

  autoInvoked = value => {
    console.log(value);
  };

  invokedOnClickAlternative = e => {
    console.log("Invoked On Click - More Legible");
  };

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => this.invokedOnClick("Invoked On Click")}
      >
        Invoked on Click
      </button>

      <button
        type="button"
        onClick={this.autoInvoked("Auto Invoked runned on Load")}
      >
        Auto Invoked
      </button>

      <button
        type="button"
        value="Invoked On Click - More Legible"
        onClick={this.invokedOnClickAlternative}
      >
        Invoked On Click - More Legible
      </button>
    </div>
  );
}
