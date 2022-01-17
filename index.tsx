import React from 'react';
import { render } from 'react-dom';

import { Users } from './Users';
import './style.css';

function App() {
  return (
    <>
      <h1>Users:</h1>
      <Users />
    </>
  );
}

render(<App />, document.getElementById('root'));
