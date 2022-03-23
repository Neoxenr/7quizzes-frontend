import React from 'react';

import Button from './components';

import './App.css';

function App() {
  return (
    <Button
      onClick={() => alert('alert is opened')}
    >
      Click me to open an alert
    </Button>
  );
}

export default App;
