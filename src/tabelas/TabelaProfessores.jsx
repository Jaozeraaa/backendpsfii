import { useState } from "react";
import { Button, Table, Form, Container} from "react-bootstrap";
import "./estilos/tabela.css";

export default function TabelaProfessores(props) {
  const [professores, setProfessores] = useState(props.listaProfessores);

  function excluirProfessor(cod) {
    const listaAtualizada = props.listaProfessores.filter(
      (professor) => professor.cod !== cod
    );
    props.setProfessores(listaAtualizada);
    setProfessores(listaAtualizada);
  }

  function filtrarProfessores(e) {
    const termoBusca = e.currentTarget.value;
    const resultadoBusca = props.listaProfessores.filter((professor) =>
      professor.nome.includes(termoBusca)
    );
    setProfessores(resultadoBusca);
  }

  return (
    <body id="corpo" className="colorwhite">
      <Container className="border corpoTabela">
        <h1 className="text-center">Tabela Cadastro de Professores</h1>
        <Button variant="secondary"
          onClick={() => {
            props.exibirTabela(false);
          }}
        >
          Cadastrar
        </Button>

        <Form className="d-flex">
          <Form.Control
            className="BarraPesquisar"
            type="text"
            id="termoBusca"
            onChange={filtrarProfessores}
            placeholder="Pesquisar"
          />
        </Form>
        <Table striped bordered hover>
          <thead className="colorwhite">
            <tr>
              <th>CPF</th>
              <th>Sexo</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Materia</th>
              <th>Telefone</th>
              <th>Cidade</th>
              <th>endereco</th>
              <th>CEP</th>
              <th>Data Nasc.</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {professores?.map((professor) => {
              return (
                <tr key={professor.cod}>
                  <td id="colorwhite">{professor.cpf}</td>
                  <td id="colorwhite">{professor.sexo}</td>
                  <td id="colorwhite">{professor.nome}</td>
                  <td id="colorwhite">{professor.email}</td>
                  <td id="colorwhite">{professor.materia}</td>
                  <td id="colorwhite">{professor.telefone}</td>
                  <td id="colorwhite">{professor.cidade}</td>
                  <td id="colorwhite">{professor.endereco}</td>
                  <td id="colorwhite">{professor.cep}</td>
                  <td id="colorwhite">{professor.dataNasc}</td>
                  <td>
                    <Button variant="warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => {
                        if (
                          window.confirm("Deseja realmente excluir o professor?")
                        ) {
                          excluirProfessor(professor.cod);
                        }
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </body>
  );
}
