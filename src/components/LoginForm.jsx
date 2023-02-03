/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import { SendOutlined } from '@ant-design/icons';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const authObject = {
      'Project-ID': 'f120dab3-e5d2-4003-8d2c-bca33906f9ad',
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats/', {
        headers: authObject,
      });

      localStorage.setItem('testChatUsername', username);
      localStorage.setItem('testChatPassword', password);

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Chat Application</h1>
        <input
          type="text"
          className="login-control"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-control"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div className="flex justify-center">
          <button type="submit" className="login-submit">
            Go to Chat
            <SendOutlined />
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
