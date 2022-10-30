export default class RespostaModel {
    private valor: string;
    private certa: boolean;
    private revelada: boolean;

    constructor(valor: string, certa: boolean, relevada = false) {
        this.valor = valor;
        this.certa = certa;
        this.revelada = relevada;
    }

    static certa(valor: string) {
        return new RespostaModel(valor, true);
    }

    static errada(valor: string) {
        return new RespostaModel(valor, false);
    }

    get getValor() {
        return this.valor;
    }

    get getCerta() {
        return this.certa;
    }

    get getRevelada() {
        return this.revelada;
    }

    static criarUsandoObjeto(obj: RespostaModel): RespostaModel {
        return new RespostaModel(obj.valor, obj.certa, obj.revelada)
    }

    revelar() {
        return new RespostaModel(this.valor, this.certa, true);
    }

}
