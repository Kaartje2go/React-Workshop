// Vendors
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './src/App';

// Other
import queryClient from './src/Queries/client';

// Styling
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
