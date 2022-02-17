export class ContaCorrente{
    agencia;
    cliente;

    #saldo = 0;

    sacar(valor){
        if (this.#saldo >= valor) {
            this.#saldo = this.#saldo - valor;
        }else{
            console.log("Não á saldo suficiente");
        }
    }

    depositar(valor){
        if(valor>0){
            this.#saldo = this.#saldo + valor;
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
        console.log("Cliente: "+this.cliente.nome,this.cliente.cpf+"\nAgencia: "+this.agencia+" | ","Saldo: "+this.#saldo);
        return this.#saldo;
    }
}