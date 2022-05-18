import React, { useState, useEffect } from 'react';

import Guide from '../../components/Guide/Guide';

const GameStart = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    fetch('/data.json').then(response => response.json()).then(data => setRules(data.rules));
  }, []);

  return (
    <Guide rules={rules} />
  );
};

export default GameStart;
