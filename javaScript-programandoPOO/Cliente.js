export class Cliente{
    nome;
    _cpf;

    constructor(nome,cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

    get cpf(){
        this._cpf;
    }
}