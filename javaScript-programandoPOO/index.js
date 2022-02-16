class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    #agencia;
    #saldo = 0;

    sacar(valor){
        if (this.#saldo >= valor) {
            this.#saldo = this.#saldo - valor;
            this.exibirConta();
        }else{
            console.log("Não á saldo suficiente");
        }
    }

    depositar(valor){
        if(valor>0){
            this.#saldo = this.#saldo + valor;
            this.exibirConta();
        }else{
            console.log("Não é possivel depositar valores menores que 0");
        }
    }

    exibirConta(){
        console.log("Agencia: "+this.agencia+" | ","Saldo: "+this.#saldo);
    }
}

const cliente1 = new Cliente();
cliente1.nome = "victor";
cliente1.cpf = "50350350340";

const conta1 = new ContaCorrente();
conta1.agencia = "500";


//execucao
conta1.depositar(1000);
conta1.sacar(900);
conta1.exibirConta();
conta1.depositar(-2);