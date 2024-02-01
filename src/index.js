import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 註冊表單
const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // 在這裡執行註冊邏輯，例如發送API請求
    onRegister({ username, password });
  };

  return (
    <div>
      <h2>註冊</h2>
      <input
        type="text"
        placeholder="使用者名稱"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="密碼"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>註冊</button>
    </div>
  );
};

// 登入表單
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 在這裡執行登入邏輯，例如發送API請求
    onLogin({ username, password });
  };

  return (
    <div>
      <h2>登入</h2>
      <input
        type="text"
        placeholder="使用者名稱"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="密碼"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>登入</button>
    </div>
  );
};

// 登入頁面
const LoginPage = () => {
    const handleRegister = (userData) => {
      // 實作註冊邏輯，例如發送API請求
      console.log('註冊', userData);
    };
  
    const handleLogin = (userData) => {
      // 實作登入邏輯，例如發送API請求
      console.log('登入', userData);
    };
  
    return (
      <div className="form-container">
        <div> 
          <RegisterForm onRegister={handleRegister} />
        </div>
        <div>
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    );
  };
  

// 渲染登入頁面
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LoginPage />);
