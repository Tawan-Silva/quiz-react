import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Questionario from '../components/Questionario';
import QuestaoModel from '../model/questao';

const BASE_URL = 'quiz-react-4hnzlu729-tawan-silva.vercel.app/api';

export default function Home() {
  const router = useRouter();
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [respostasCertas,setRespostasCertas] = useState<number>(0);

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])
  


  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resp.json();
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  function questaoRespondida(questao: QuestaoModel) {
    setQuestao(questao);
    const acertou = questao.getAcertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }

  function idProximaPergunta() {
    const proximoIndice = idsDasQuestoes.indexOf(questao.getId) + 1;
    return idsDasQuestoes[proximoIndice];
  }

  function irPraProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }

  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    });
  }

  return (
     questao ? 
      <Questionario 
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    /> : false
  )
}
