import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { UserProvider } from './contexts/UserContext';

const rootElement = document.getElementById('root')!;

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);