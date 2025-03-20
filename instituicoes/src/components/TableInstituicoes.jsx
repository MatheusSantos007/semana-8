import { Table, Button } from "react-bootstrap";

const TableInstituicoes = ({ instituicoes, onAdd, onEdit, onDelete }) => {
  return (
    <div>
      <Button variant="success" onClick={onAdd} className="mb-3">
        Adicionar (+)
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome da Entidade</th>
            <th>Município</th>
            <th>UF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {instituicoes.map((inst) => (
            <tr key={inst.CO_MUNICIPIO}>
              <td>{inst.NO_ENTIDADE}</td>
              <td>{inst.NO_MUNICIPIO}</td>
              <td>{inst.SG_UF}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => onEdit(inst)}>
                  ✏️ Editar
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={() => onDelete(inst.id)}>
                  ❌ Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableInstituicoes;
