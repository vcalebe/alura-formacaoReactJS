export class Conta{
    constructor(saldoIni, cliente, agencia) {
        this._saldo = saldoIni;
        this._cliente = cliente;
        this._agencia = agencia;
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
        throw new Error("Não permitido");
    }

    _sacar(valor,taxa){
        const valorSacado = taxa * taxa;
        if (this._saldo >= valorSacado) {
            this._saldo = this._saldo - valorSacado;
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
      
        this._sacar(valor);
        conta.depositar(valor);
        
        this.exibirConta();
        conta.exibirConta();
    }

    exibirConta(){
        console.log("Cliente: "+this._cliente.nome+"\nAgencia: "+this.agencia+" | ","Saldo: "+this._saldo);
        return this._saldo;
    }
}