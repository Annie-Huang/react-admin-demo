import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
  // Runs when user attempts to login
  login: ({ username, password }) => {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('username', username);
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
};
