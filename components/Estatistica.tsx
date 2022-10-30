import { EstatisticaProps } from "../model/estatisticaProps";
import styles from "../styles/Estatistica.module.css";

export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor: props.corFundo ?? '#FDD60F',
                color: props.corFonte ?? '#333'
            }}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}