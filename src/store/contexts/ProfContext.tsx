// Top level App component
import React, { useState, createContext } from 'react';
// Add your Firebase credentials
const initialState = {
  prof: {
    id: '',
    email: '',
    login: '',
    password: '',
    oranisation: '',
    role: '',
    avatar: { url: '', public_id: '' },
    cards: [''],
    tablets: [''],
  },
  signin: function (email: string, password: string) {
    console.log({ email, password });
  },
  signup: function (email: string, password: string) {
    console.log({ email, password });
  },
  signout: function () {
    console.log();
  },
};
export const ProfContext = createContext(initialState);

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProfProvider({ children }: { children: React.ReactNode }) {
  const profManagement = useProvideProf();
  return <ProfContext.Provider value={profManagement}>{children}</ProfContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.

// Provider hook that creates auth object and handles state
function useProvideProf() {
  const [prof, _setProf] = useState(initialState.prof);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email: string, password: string) => {
    _setProf({
      id: '',
      email,
      password,
      login: '',
      oranisation: '',
      role: '',
      avatar: { url: '', public_id: '' },
      cards: [''],
      tablets: [''],
    });
  };

  const signup = (email: string, password: string) => {
    _setProf({
      email,
      password,
      id: '',
      login: '',
      oranisation: '',
      role: '',
      avatar: { url: '', public_id: '' },
      cards: [''],
      tablets: [''],
    });
  };

  const signout = () => {
    _setProf({
      id: '',
      email: '',
      login: '',
      password: '',
      oranisation: '',
      role: '',
      avatar: { url: '', public_id: '' },
      cards: [''],
      tablets: [''],
    });
  };
  return {
    prof,
    signin,
    signup,
    signout,
  };
}
