import { Button } from "./components";

import "./App.css";

function App() {
  return (
    <Button
      children="Click me to open an alert"
      className="button_hover"
      disabled={false}
      onClick={() => alert("alert is opened")}
    />
  );
}

export default App;
