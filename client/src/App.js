import React from "react";
import "./App.css";

class App extends React.Component {
  async componentDidMount() {
    const url = "/api";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <h1>React-Express template</h1>
      </div>
    );
  }
}

export default App;
