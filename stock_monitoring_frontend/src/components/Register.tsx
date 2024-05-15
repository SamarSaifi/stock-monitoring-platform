import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password1 !== password2) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/auth/registration/', {
        username,
        email,
        password1,
        password2,
      });
      // Handle successful registration (e.g., redirect to login page)
      console.log(response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password1">Password:</label>
        <input
          type="password"
          id="password1"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password2">Confirm Password:</label>
        <input
          type="password"
          id="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;