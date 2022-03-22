import React from 'react';

import Button from './components';

import './App.css';

function App() {
  return (
    <Button
      className="button_hover"
      disabled={false}
      onClick={() => alert('alert is opened')}
      children="Click me to open an alert"
    />
  );
}

export default App;
