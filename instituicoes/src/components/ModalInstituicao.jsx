import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

const ModalInstituicao = ({ show, handleClose, onSave, instituicao }) => {
  const initialValues = instituicao || {
    NO_ENTIDADE: "",
    NO_MUNICIPIO: "",
    SG_UF: "",
    QT_MAT_BAS: "",
  };

  const validationSchema = Yup.object({
    NO_ENTIDADE: Yup.string().required("Nome da entidade é obrigatório"),
    NO_MUNICIPIO: Yup.string().required("Município é obrigatório"),
    SG_UF: Yup.string()
      .length(2, "UF deve ter 2 caracteres")
      .required("UF é obrigatória"),
    QT_MAT_BAS: Yup.number()
      .typeError("A quantidade deve ser um número")
      .integer("A quantidade deve ser um número inteiro")
      .min(0, "A quantidade não pode ser negativa")
      .required("Quantidade de matrículas é obrigatória"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formulário enviado");
    onSave(values);
    resetForm();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {instituicao ? "Editar Instituição" : "Adicionar Instituição"}
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Nome da Entidade</Form.Label>
                <Field name="NO_ENTIDADE" className="form-control" />
                <ErrorMessage
                  name="NO_ENTIDADE"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Município</Form.Label>
                <Field name="NO_MUNICIPIO" className="form-control" />
                <ErrorMessage
                  name="NO_MUNICIPIO"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>UF</Form.Label>
                <Field name="SG_UF" className="form-control" />
                <ErrorMessage
                  name="SG_UF"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quantidade de Matrículas</Form.Label>
                <Field name="QT_MAT_BAS" type="number" className="form-control" />
                <ErrorMessage
                  name="QT_MAT_BAS"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                Salvar
              </Button>
            </Modal.Footer>
          </FormikForm>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalInstituicao;