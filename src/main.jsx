import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useState } from 'react';
import UserContext from './UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  // Estado para a variável status
  const [status, setStatus] = useState('Iniciante');

  // Valor do contexto com o usuário e a função para atualizar o status
  const value = {
    user: { nome: 'Maria' },
    status: status,
    setStatus: setStatus
  };

  return (
    <UserContext.Provider value={value}>
      <App />
    </UserContext.Provider>
  );
}

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);