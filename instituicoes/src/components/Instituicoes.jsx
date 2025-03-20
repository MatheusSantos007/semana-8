import { useState, useEffect } from "react";
import TableInstituicoes from "../components/TableInstituicoes";
import ModalInstituicao from "../components/ModalInstituicao";
import axios from "axios";

const Instituicoes = () => {
  const [showModal, setShowModal] = useState(false);
  const [instituicoes, setInstituicoes] = useState([]);
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState(null);

  const fetchInstituicoes = () => {
    axios.get("http://localhost:3000/paraiba")
      .then(response => setInstituicoes(response.data))
      .catch(error => console.error("Erro ao buscar dados:", error));
  };

  useEffect(() => {
    fetchInstituicoes();
  }, []);

  const handleEdit = (instituicao) => {
    setInstituicaoSelecionada(instituicao);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja remover esta instituição?")) {
      axios.delete(`http://localhost:3000/paraiba/${id}`)
        .then(() => fetchInstituicoes())
        .catch(error => console.error("Erro ao remover:", error));
    }
  };

  const handleClose = () => {
    console.log("Modal fechado");
    setShowModal(false);
  };

  return (
    <div>
      <TableInstituicoes 
        instituicoes={instituicoes} 
        onAdd={() => { setInstituicaoSelecionada(null); setShowModal(true); }} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
      <ModalInstituicao 
        show={showModal} 
        handleClose={handleClose} 
        onSave={fetchInstituicoes} 
        instituicao={instituicaoSelecionada} 
      />
    </div>
  );
};

export default Instituicoes;