import React from 'react';

import Button from './components';

import './App.css';

function App() {
  return (
    <Button
      // eslint-disable-next-line no-alert
      onClick={() => alert('alert is opened')}
    >
      Click me to open an alert
    </Button>
  );
}

export default App;
