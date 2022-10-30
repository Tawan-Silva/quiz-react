import { RespostaProps } from "../model/respostaProps";
import styles from "../styles/Resposta.module.css";

export default function Resposta(props: RespostaProps) {
  const resposta = props.valor;
  const respostaRevelada = resposta.getRevelada ? styles.respostaRevelada : "";
  return (
    <div
      className={styles.resposta}
      onClick={() => props.respostaFornecida(props.indice)}>
      <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>
        <div className={styles.frente}>
          <div
            className={styles.letra}
            style={{ backgroundColor: props.corFundoLetra }}>
            {props.letra}
          </div>
          <div className={styles.valor}>{resposta.getValor}</div>
        </div>
        <div className={styles.verso}>
          {resposta.getCerta ? (
            <div className={styles.certa}>
              <div>A resposta certa é...</div>
              <div className={styles.valor}>{resposta.getValor}</div>
            </div>
          ) : (
            <div className={styles.errada}>
              <div>A resposta informada está errada...</div>
              <div className={styles.valor}>{resposta.getValor}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
