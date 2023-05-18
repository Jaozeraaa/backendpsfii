import { Alert } from "react-bootstrap";
import Pagina from "../templates/componentes/Pagina.js";
import Rodape from "../templates/componentes/Rodape.js";

export default function Tela404(props){
    return (
        <div>
            <Pagina>
                <Alert className="text-center" variant="warning">
                    O recurso solicitado não existe
                </Alert>
            </Pagina>
            <Rodape></Rodape>
        </div>
    );
}