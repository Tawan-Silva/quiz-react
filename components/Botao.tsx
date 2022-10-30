import styles from "../styles/Botao.module.css";
import { BotaoProps } from "../model/botaoProps";
import Link from "next/link";

export default function Botao(props: BotaoProps)  {

    function renderizarBotao() {
        return (
            <button className={styles.botao}
                onClick={props.onClick}>
                {props.texto}
            </button>
        )
    }

    return props.href ? (
       <Link href={props.href}>
        {renderizarBotao()} 
       </Link>
    ) : renderizarBotao();
}