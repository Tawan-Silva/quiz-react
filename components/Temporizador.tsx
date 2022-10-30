import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { TemporizadorProps } from "../model/temporizadorProps";
import styles from "../styles/Temporizador.module.css";

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
            duration={props.duracao}
            size={120}
            isPlaying
            onComplete={props.tempoEsgotado}
            colors={['#BCE596','#F7B801','#ED938A']}
            colorsTime={[10, 3, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}