import React, { useState } from 'react';
import Login from './LoginPage';
import StartLogin from './StartPage';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return isLogin ? <Login onBack={handleLogin} /> : <StartLogin onLogin={handleLogin} />;
}
