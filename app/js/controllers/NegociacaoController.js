class NegociacaoController {
    constructor() {
        //Realização do casting do tipo 'Element' que é retornado pelo método
        // querySelector para o HTMLInputElement 
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        //Previne que a tela seja recarregada
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao);
    }
}
