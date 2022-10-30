import { QuestionarioProps } from "../model/questionarioProps";
import styles from "../styles/Questionario.module.css";
import Botao from "./Botao";
import { Questao } from "./Questao";

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if (props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice));
        }

    }

    return (
        <div className={styles.questionario}>
            {props.questao ? 
                <Questao 
                valor={props.questao}
                tempoPraResposta={6}
                respostaFornecida={respostaFornecida}
                tempoEsgotado={props.irPraProximoPasso} />

                : false
            }
                <Botao onClick={props.irPraProximoPasso} 
                    texto={props.ultima ? 'Finalizar' : 'Próxima'} />
        </div>
    )
}