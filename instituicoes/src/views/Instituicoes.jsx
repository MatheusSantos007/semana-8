import { useState, useContext } from "react";
import { InstituicoesContext } from "../context/InstituicoesContext";
import { Table, Button } from "react-bootstrap";
import MainLayout from "../layouts/MainLayout";
import ModalInstituicao from "../components/ModalInstituicao";
import axios from "axios";

const Instituicoes = () => {
  const { instituicoes, setInstituicoes } = useContext(InstituicoesContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedInstituicao, setSelectedInstituicao] = useState(null);

  const handleOpenModal = (instituicao = null) => {
    setSelectedInstituicao(instituicao);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInstituicao(null);
  };

  const handleSave = (newData) => {
    if (selectedInstituicao) {
      // Edição
      axios.put(`http://localhost:3000/paraiba/${selectedInstituicao.id}`, newData)
        .then(() => {
          updateInstituicoes();
          handleCloseModal();
        })
        .catch(error => console.error("Erro ao editar:", error));
    } else {
      // Cadastro
      axios.post("http://localhost:3000/paraiba", newData)
        .then(() => {
          updateInstituicoes();
          handleCloseModal();
        })
        .catch(error => console.error("Erro ao cadastrar:", error));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta instituição?")) {
      axios.delete(`http://localhost:3000/paraiba/${id}`)
        .then(() => updateInstituicoes())
        .catch(error => console.error("Erro ao excluir:", error));
    }
  };

  const updateInstituicoes = () => {
    axios.get("http://localhost:3000/paraiba")
      .then(response => setInstituicoes(response.data))
      .catch(error => console.error("Erro ao buscar instituições:", error));
  };

  return (
    <MainLayout>
      <h2>Lista de Instituições</h2>
      <Button variant="primary" className="mb-3" onClick={() => handleOpenModal()}>
        + Adicionar
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Município</th>
            <th>UF</th>
            <th>Matrículas</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {instituicoes.map((inst) => (
            <tr key={inst.id}>
              <td>{inst.NO_ENTIDADE}</td>
              <td>{inst.NO_MUNICIPIO}</td>
              <td>{inst.SG_UF}</td>
              <td>{inst.QT_MAT_BAS}</td>
              <td>
                <Button variant="warning" className="me-2" onClick={() => handleOpenModal(inst)}>
                  ✏️
                </Button>
                <Button variant="danger" onClick={() => handleDelete(inst.id)}>
                  🗑️
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalInstituicao
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleSave}
        instituicao={selectedInstituicao}
      />
    </MainLayout>
  );
};

export default Instituicoes;
