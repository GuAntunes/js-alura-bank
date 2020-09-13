class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    //Devemos sempre indicar o tipo de retorno como boa prática
    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}