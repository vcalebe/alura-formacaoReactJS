import {Cliente} from "./Cliente.js"
export class ContaCorrente{
    static numContas = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numContas +=1;
    }

    set cliente(novoCliente){
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;
        }else{
            console.log("Não á saldo suficiente");
        }
    }

    depositar(valor){
        if(valor>0){
            this._saldo = this._saldo + valor;
        }else{
            console.log("Não é possivel depositar valores menores que 0");
        }
    }

    transferir(valor,conta){
      
        this.sacar(valor);
        conta.depositar(valor);
        
        this.exibirConta();
        conta.exibirConta();
    }

    exibirConta(){
        console.log("Cliente: "+this._cliente.nome+"\nAgencia: "+this.agencia+" | ","Saldo: "+this._saldo);
        return this._saldo;
    }

}