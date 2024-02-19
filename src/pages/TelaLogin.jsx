import { Button, Col, Flex, Form, Input, Row } from "antd";
import axios from "axios";

import { useState } from "react";
import Cadastro from "./TelaCadastro";
import ListarUsuarios from "./TelaListarUsuarios.jsx";

//import do css
// import "../css/TelaLogin.css";
import FormItem from "antd/es/form/FormItem/index.js";
import TelaRedefinirSenha from "./TelaRedefinirSenha.jsx";

function AuthLogin() {
  const [redirect, setRedirect] = useState(null);
  const [telaCadastro, setTelaCadastro] = useState(null);
  const [telaRedefinirSenha, setTelaRedefinirSenha] = useState(null);

  async function login(dados) {
    try {
      // const resposta = await axios.post("https://fs01backend.onrender.com/auth/login", dados);
      const resposta = await axios.post(
        "http://localhost:8080/auth/login",
        dados
      );

      setRedirect(true);
      alert("Login Autorizado");
    } catch (error) {
      alert("Erro ao fazer login. Por favor, tente novamente.");
    }
  }

  if (redirect) {
    return <ListarUsuarios />;
  }
  if (telaCadastro) {
    return <Cadastro />;
  }
  if (telaRedefinirSenha) {
    return <TelaRedefinirSenha />;
  }

  function RedefinirSenha() {
    setTelaRedefinirSenha(true);
  }

  function TelaCadastro() {
    setTelaCadastro(true);
  }

  return (
    <>
      <style>
        {`
          .login-container {
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .login-form {
            width: 300px;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }

          .login-form-title {
            text-align: center;
            font-size: 1.5rem;
            margin-bottom: 20px;
          }

          .login-button {
            width: 100%;
          }

        `}
      </style>

      <Flex className="login-container">
        <Form className="login-form" layout="vertical" onFinish={login}>
          <div className="login-form-title">Login</div>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Por favor, insira seu email!" },
                  {
                    type: "email",
                    message: "Por favor, insira um email válido!",
                  },
                ]}
              >
                <Input type="email" placeholder="Digite seu email" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Senha"
                name="senha"
                rules={[
                  { required: true, message: "Por favor, insira sua senha!" },
                ]}
              >
                <Input.Password placeholder="Digite sua senha" />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item>
                <Button
                  className="login-button"
                  type="primary"
                  htmlType="submit"
                >
                  Entrar
                </Button>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Button type="primary" onClick={TelaCadastro}>
                  Cadastrar novo usuário
                </Button>
              </Form.Item>
            </Col>
            <Col>
              <FormItem>
                <Button type="danger" onClick={RedefinirSenha}>
                  Esqueci a senha
                </Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Flex>
    </>
  );
}

export default AuthLogin;
