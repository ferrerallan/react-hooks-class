import { createContext, useState } from 'react';

// Crie um contexto com um valor inicial para o usuário, status e a função setStatus
const UserContext = createContext({
  user: { nome: 'Maria' },
  status: 'Iniciante',
  setStatus: () => {} // Função para atualizar o status
});

export default UserContext;