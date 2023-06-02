import Pagina from "../templates/componentes/Pagina.js";
import FormPessoa from "../Formularios/FormPessoa.jsx";
import TabelaPessoa from "../tabelas/TabelaPessoa.jsx";
import { useState } from "react";

export default function TelaCadastroPessoa(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    const [pessoas, setPessoas] = useState ();
    return (
            <Pagina>
                <div>
                {
                    exibirTabela ? 
                    <TabelaPessoa listaPessoas={pessoas} 
                    setPessoas={setPessoas}
                    exibirTabela={setExibirTabela}/> 
                    :
                    <FormPessoa listaPessoas={pessoas} 
                    setPessoas={setPessoas}
                    exibirTabela={setExibirTabela}/>
                }
                </div>
            </Pagina>
    );
}