import { Button, Col, Flex, Form, Input, Row } from "antd";
import axios from "axios";

function App() {
  // const api = axios.create({ baseURL: "https://fs01backend.onrender.com/login" });
  async function login(dados) {
    // const resposta = await fetch("https://fs01backend.onrender.com/login", {
    //   method: "POST",
    //   body: JSON.stringify(dados),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    const nova = axios.post("https://fs01backend.onrender.com/login", dados);
    console.log(dados);
    console.log(nova);
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

