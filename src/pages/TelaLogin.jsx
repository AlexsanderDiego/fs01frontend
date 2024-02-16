import { Button, Col, Flex, Form, Input, Row } from "antd";
import axios from "axios";

import { useState } from "react";
import Cadastro from "./TelaCadastro";
import ListarUsuarios from "./TelaListarUsuarios.jsx";

//import do css
// import "./telalogin.css";
import FormItem from "antd/es/form/FormItem/index.js";

function AuthLogin() {
  const [redirect, setRedirect] = useState(null);
  const [telaCadastro, setTelaCadastro] = useState(null);

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

  function TelaCadastro() {
    setTelaCadastro(true);
  }

  return (
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
              <Button className="login-button" type="primary" htmlType="submit">
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
              <Button type="danger" onClick={TelaCadastro}>
                Esqueci a senha
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
}

export default AuthLogin;
