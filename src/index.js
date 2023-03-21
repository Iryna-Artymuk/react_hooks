import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './components/App/App';
import AuthProvider from './Context/Authprovider';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>

  // </React.StrictMode>
);

// ReactDOM.render(<App />, document.querySelector("#root"));
