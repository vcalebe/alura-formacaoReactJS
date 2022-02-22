import {Conta} from "./Conta.js"

export class ContaPoupanca extends Conta{
    constructor(saldoIni,cliente,agencia){
        super(0,cliente,agencia);
    }
}