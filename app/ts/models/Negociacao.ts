class Negociacao {

    //Foi comentado este código pois o typescript consegue identificar
    //quando estamos declarando um atributo diretamente no construtor,
    //para as variáveis que inicirem com `private`
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    constructor(private _data: Date, private _quantidade: number, private _valor: number) {
        // // Por convenção quando um atributo inica com underline ele é privado
        // // sendo assim não pode ser acessado diretamente de fora da classe
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}