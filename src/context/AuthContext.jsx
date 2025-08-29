import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {

  const [isAuthenticated, setAuth] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const login = (phone) => {
    if (phone === '+254712345678') {
      setAuth(true);
      localStorage.setItem('isLoggedIn', 'true'); 
      localStorage.setItem('phone', phone);
      return { ok: true };
    }
    return { ok: false, message: 'Use +254712345678 only' };
  }

  const logout = () => {
    setAuth(false);
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('phone');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)
