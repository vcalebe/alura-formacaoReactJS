import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente("victor",404040404040);

const conta1 = new ContaCorrente(505,cliente1);
conta1.depositar(300);

conta1.exibirConta();
console.log(ContaCorrente.numContas);

