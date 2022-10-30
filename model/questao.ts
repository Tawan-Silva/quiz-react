import { embaralhar } from "../functions/arrays";
import RespostaModel from "./reposta";

export default class QuestaoModel {
  private id: number;
  private enunciado: string;
  private respostas: RespostaModel[];
  private acertou: boolean;

  constructor(
    id: number,
    enunciado: string,
    respotas: RespostaModel[],
    acertou = false
  ) {
    this.id = id;
    this.enunciado = enunciado;
    this.respostas = respotas;
    this.acertou = acertou;
  }

  get getId() {
    return this.id;
  }

  get getEnunciado() {
    return this.enunciado;
  }

  get getRespostas() {
    return this.respostas;
  }

  get getAcertou() {
    return this.acertou;
}

  get naoRespondida() {
    return !this.respondida;
  }

  get respondida() {
    for (let respota of this.respostas) {
      if (respota.getRevelada) return true;
    }
    return false;
  }

  static criarUsandoObjeto(obj: QuestaoModel): QuestaoModel {
    const respostas = obj.respostas.map((resp) =>
      RespostaModel.criarUsandoObjeto(resp)
    );

    return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou);
  }

  responderCom(indice: number): QuestaoModel {
    const acertou = this.respostas[indice]?.getCerta;
    const respostas = this.respostas.map((resposta, i) => {
      const respostaSelecionada = indice === i;
      const deveRevelar = respostaSelecionada || resposta.getCerta;
      return deveRevelar ? resposta.revelar() : resposta;
    });
    return new QuestaoModel(this.id, this.enunciado, respostas, acertou);
  }

  embaralharRespostas(): QuestaoModel {
    let respostasEmbaralhadas = embaralhar(this.respostas);
    return new QuestaoModel(
      this.id,
      this.enunciado,
      respostasEmbaralhadas,
      this.acertou
    );
  }
}
