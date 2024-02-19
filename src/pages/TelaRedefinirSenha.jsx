// AtualizarRedefinirSenha.js

import React, { useState } from 'react';
import { Form, Input, Button, Radio, message } from 'antd';
// import 'antd/dist/antd.css'; // Importe o estilo padrão do Ant Design

const TelaRedefinirSenha = () => {
  const [form] = Form.useForm();
  const [opcao, setOpcao] = useState('atualizar'); // opcao pode ser 'atualizar' ou 'redefinir'

  const handleSubmit = async (values) => {
    try {
      // Lógica para lidar com a submissão do formulário, dependendo da opção selecionada
      if (opcao === 'redefinir') {
        // Lógica para redefinir a senha
        console.log('Redefinir Senha:', values);
      } else {
        // Lógica para atualizar a senha
        console.log('Atualizar Senha:', values);
      }

      // Exemplo de mensagem de sucesso usando o componente message do Ant Design
      message.success('Senha atualizada com sucesso!');
    } catch (error) {
      console.error('Erro durante a atualização/redefinição de senha:', error);
      // Exemplo de mensagem de erro usando o componente message do Ant Design
      message.error('Erro durante a atualização/redefinição de senha. Por favor, tente novamente.');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', marginTop: '50px' }}>
      <h2>Atualizar/Redefinir Senha</h2>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item>
          <Radio.Group onChange={(e) => setOpcao(e.target.value)} value={opcao}>
            <Radio value="atualizar">Atualizar Senha</Radio>
            <Radio value="redefinir">Redefinir Senha</Radio>
          </Radio.Group>
        </Form.Item>

        {opcao === 'redefinir' && (
          <div>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Por favor, insira seu email!' },
                { type: 'email', message: 'Por favor, insira um email válido!' },
              ]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              name="nomeUsuario"
              label="Nome de Usuário"
              rules={[{ required: true, message: 'Por favor, insira seu nome de usuário!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="novaSenha"
              label="Nova Senha"
              rules={[{ required: true, message: 'Por favor, insira sua nova senha!' }]}
            >
              <Input.Password />
            </Form.Item>
          </div>
        )}

        {opcao === 'atualizar' && (
          <div>
            <Form.Item
              name="senhaAntiga"
              label="Senha Antiga"
              rules={[{ required: true, message: 'Por favor, insira sua senha antiga!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="novaSenha"
              label="Nova Senha"
              rules={[{ required: true, message: 'Por favor, insira sua nova senha!' }]}
            >
              <Input.Password />
            </Form.Item>
          </div>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Confirmar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TelaRedefinirSenha;




// import React, { useState } from 'react';

// const TelaRedefinirSenha = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleNewPasswordChange = (e) => {
//     setNewPassword(e.target.value);
//   };

//   const handleCurrentPasswordChange = (e) => {
//     setCurrentPassword(e.target.value);
//   };

//   const handleResetPasswordSubmit = (e) => {
//     e.preventDefault();
//     // Send email to user with password reset link
//     // You can use a library like nodemailer to send the email
//     // Here's a simple example using the browser's built-in email client
//     window.open(`mailto:${email}?subject=Password Reset&body=Click the link to reset your password`);
//     setMessage('Email sent! Please check your inbox.');
//   };

//   const handleChangePasswordSubmit = (e) => {
//     e.preventDefault();
//     // Make API call to change password
//     // Example API call using fetch:
//     fetch('/api/change-password', {
//       method: 'POST',
//       body: JSON.stringify({ username, newPassword, currentPassword }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle API response
//         setMessage(data.message);
//       })
//       .catch((error) => {
//         // Handle error
//         setMessage('An error occurred. Please try again later.');
//       });
//   };

//   return (
//     <div>
//       <h1>Password Management</h1>
//       <div>
//         <h2>Reset Password</h2>
//         <form onSubmit={handleResetPasswordSubmit}>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//           <button type="submit">Reset Password</button>
//         </form>
//       </div>
//       <div>
//         <h2>Change Password</h2>
//         <form onSubmit={handleChangePasswordSubmit}>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
//           <label htmlFor="newPassword">New Password:</label>
//           <input type="password" id="newPassword" value={newPassword} onChange={handleNewPasswordChange} required />
//           <label htmlFor="currentPassword">Current Password:</label>
//           <input type="password" id="currentPassword" value={currentPassword} onChange={handleCurrentPasswordChange} required />
//           <button type="submit">Change Password</button>
//         </form>
//       </div>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default TelaRedefinirSenha;


// import React, { useState } from 'react';

// const TelaRedefinirSenha = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send email to user with password reset link
//     // You can use a library like nodemailer to send the email
//     // Here's a simple example using the browser's built-in email client
//     window.open(`mailto:${email}?subject=Password Reset&body=Click the link to reset your password`);
//     setMessage('Email sent! Please check your inbox.');
//   };

//   return (
//     <div>
//       <h1>Password Reset</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//         <button type="submit">Reset Password</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default TelaRedefinirSenha;
