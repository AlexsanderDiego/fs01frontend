import React, { useState, useEffect } from "react";
import { Table, Space, Button, Modal, Form, Input, message } from "antd";
import axios from "axios";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editandoUsuario, setEditandoUsuario] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    // Chamada à API para obter a lista de usuários
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/usuarios/");
        setUsuarios(response.data);
        console.log("Lista de usuários:", response.data);
      } catch (error) {
        console.error("Erro ao obter lista de usuários:", error);
        message.error(
          "Erro ao obter lista de usuários. Por favor, tente novamente."
        );
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Usuário",
      dataIndex: "usuario",
      key: "usuario",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ações",
      key: "acoes",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditar(record)}>
            Editar
          </Button>
          <Button type="danger" onClick={() => handleExcluir(record.id)}>
            Excluir
          </Button>
        </Space>
      ),
    },
  ];

  const handleEditar = (usuario) => {
    setEditandoUsuario(usuario);
    setModalVisible(true);
  };

  const handleExcluir = (usuarioId) => {
    const excluirUsuario = async () => {
      try {
        const resposta = await axios.delete(
          `http://localhost:8080/apagarusuarios/${usuarioId}`
        );
        console.log("Resposta do servidor:", resposta.values);
        alert("Usuario excluido com sucesso");

        // Atualiza a lista de usuários após a exclusão
        const response = await axios.get("http://localhost:8080/usuarios/");
        setUsuarios(response.data);
        console.log("Lista de usuários atualizada:", response.data);
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        alert("Erro ao excluir usuario. Por favor, tente novamente.");
      }
    };
    excluirUsuario();
  };

  const handleSalvarEdicao = () => {
    form
      .validateFields()
      .then((values) => {
        // Aqui você pode enviar os dados para o backend ou realizar as ações necessárias
        const editaUsuario = async () => {

          try {
            // const resposta = await axios.post("https://fs01backend.onrender.com/auth/login", dados);
            const resposta = await axios.put(
              `http://localhost:8080/usuarios/${editandoUsuario.id}`,
              values
            );

            alert("Usuario editado com sucesso");

            // Atualiza a lista de usuários após a edição
            const response = await axios.get("http://localhost:8080/usuarios/");
            setUsuarios(response.data);

          } catch (error) {
            console.error("Erro na requisição:", error);

            alert("Erro ao editar usuario. Por favor, tente novamente.");
          }
          setModalVisible(false);
          message.success("Usuário editado com sucesso!");
        };
        editaUsuario();
      })
      .catch((error) => {
        console.error("Erro ao validar campos do formulário:", error);
      });
  };

  const handleCancelarEdicao = () => {
    setModalVisible(false);
  };

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
      <h2>Lista de Usuários</h2>
      <Table dataSource={usuarios} columns={columns} />

      <Modal
        title="Editar Usuário"
        open={modalVisible}
        onOk={handleSalvarEdicao}
        onCancel={handleCancelarEdicao}
      >
        <Form form={form} initialValues={editandoUsuario}>
          <Form.Item
            name="nome"
            label="Nome"
            rules={[{ required: true, message: "Por favor, insira o nome!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Por favor, insira o email!" },
              { type: "email", message: "Por favor, insira um email válido!" },
            ]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="usuario"
            label="Usuario"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ListaUsuarios;
