import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Row, Col, Flex } from "antd";
import AuthLogin from "./TelaLogin.jsx";

import "./TelaCadastro.css";

function Cadastro() {
  const [redirect, setRedirect] = useState(null);
  const [form] = Form.useForm();

  async function handleSubmit(values) {
    try {
      // const resposta = await axios.post("https://fs01backend.onrender.com/auth/login", dados);
      const resposta = await axios.post(
        "http://localhost:8080/cadastrarusuarios",
        values
      );

      alert("Usuario Cadastrado");
      const confirma = confirm("Deseja cadastrar novo usuário?");
      if (confirma) {
        setRedirect(false);
        // limpar campos
        form.resetFields();
      } else {
        setRedirect(true);
      }
      // Adicione qualquer lógica adicional com base na resposta do servidor
      // Por exemplo, redirecionar para outra página, armazenar token de autenticação, etc.
    } catch (error) {
      // Se houver um erro na requisição, você pode lidar com ele aqui
      console.error("Erro na requisição:", error);

      // Exemplo: mostrar uma mensagem de erro para o usuário
      alert("Erro ao cadastrar usuario. Por favor, tente novamente.");
    }
  }

  if (redirect) {
    return <AuthLogin />;
  }

  return (

    <Flex className="register-container">
      <Form className="register-form" form={form} onFinish={handleSubmit}>
        <div className="register-form-title">Cadastro</div>
        <Row>
          <Col>
            <Form.Item
              name="nome"
              label="Nome"
              rules={[
                { required: true, message: "Por favor, insira seu nome!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Por favor, insira seu email!" },
                {
                  type: "email",
                  message: "Por favor, insira um email válido!",
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              name="usuario"
              label="Usuario"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              name="senha"
              label="Senha"
              rules={[
                { required: true, message: "Por favor, insira sua senha!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button
                className="register-button"
                type="primary"
                htmlType="submit"
              >
                Cadastrar
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                className="register-button"
                type="danger"
                onClick={() => setRedirect(true)}
              >
                Voltar
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
}

export default Cadastro;
