class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    //Devemos sempre indicar o tipo de retorno como boa prática
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
