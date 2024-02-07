import { Button, Col, Flex, Form, Input, Row } from "antd";
import axios from "axios";
import Test from "./Test";

import { useState } from "react";


function App() {

  const [redirect, setRedirect] = useState(null);

  async function login(dados) {
    try {
      // const resposta = await axios.post("https://fs01backend.onrender.com/auth/login", dados);
      const resposta = await axios.post("http://localhost:8080/auth/login", dados);

      // Manipule os dados da resposta conforme necessário
      console.log("Resposta do servidor:", resposta.data);
      alert('Login Autorizado');
      
      setRedirect("/outra-pagina")


      // Adicione qualquer lógica adicional com base na resposta do servidor
      // Por exemplo, redirecionar para outra página, armazenar token, etc.

    } catch (error) {
      // Se houver um erro na requisição, você pode lidar com ele aqui
      console.error("Erro na requisição:", error);

      // Exemplo: mostrar uma mensagem de erro para o usuário
      alert("Erro ao fazer login. Por favor, tente novamente.");
    }
  }

  if (redirect) {
    return <Test />;
  }

  return (
    <Flex
      gap="middle"
      justify="center"
      align="center"
      style={{ height: "100vh" }}
    >
      <Form layout="vertical" onFinish={login}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="Email" name="email">
              <Input placeholder="Digite seu email" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Senha" name="senha">
              <Input placeholder="Digite sua senha" />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Entrar
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
}

export default App;
