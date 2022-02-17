import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//cliente 1
const cliente1 = new Cliente();
cliente1.nome = "victor";
cliente1.cpf = "50350350340";

const conta1 = new ContaCorrente();
conta1.agencia = "500";
conta1.cliente = cliente1;

//cliente 2
const cliente2 = new Cliente();
cliente2.nome = "calebe";
cliente2.cpf = "50350330340";

const conta2 = new ContaCorrente();
conta2.agencia = "500";
conta2.cliente = cliente2;

//execucao
conta1.depositar(1000);
conta1.sacar(900);
conta1.transferir(50,conta2);


