import styles from "../styles/Questao.module.css";
import { QuestaoProps } from "../model/questaoProps";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

export function Questao(props: QuestaoProps) {
    const questao = props.valor;

    function renderizarResposta() {
        return questao.getRespostas.map((resposta, i) => {
            return (
                <Resposta 
                    key={`${questao.getId}-${i}`}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={props.respostaFornecida}
                />
            )
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.getEnunciado}/>
            <Temporizador key={questao.getId} 
            duracao={props.tempoPraResposta ?? 10} 
            tempoEsgotado={props.tempoEsgotado}/>
            {renderizarResposta()}
        </div>
    )
}

const letras = [
    { valor: 'A', cor: '#F2C866'},
    { valor: 'B', cor: '#F266BA'},
    { valor: 'C', cor: '#85B4F2'},
    { valor: 'D', cor: '#BCE596'},
]