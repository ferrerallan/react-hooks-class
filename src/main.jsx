import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useState } from 'react';
import UserContext from './UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  const [user, setUser] = useState({ nome: 'Maria' });

  return (
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
  );
}

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);