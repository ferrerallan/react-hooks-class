import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useState } from 'react';
import UserContext from './UserContext';

// Create a root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Main component to provide user context and render the App component
function Main() {
  // State to hold user information
  const [user, setUser] = useState({ nome: 'Maria' });

  return (
    // Provide user context to the App component
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