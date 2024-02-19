import React, { useState } from 'react';

const TelaRedefinirSenha = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email to user with password reset link
    // You can use a library like nodemailer to send the email
    // Here's a simple example using the browser's built-in email client
    window.open(`mailto:${email}?subject=Password Reset&body=Click the link to reset your password`);
    setMessage('Email sent! Please check your inbox.');
  };

  return (
    <div>
      <h1>Password Reset</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default TelaRedefinirSenha;
