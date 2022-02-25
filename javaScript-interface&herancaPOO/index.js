import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";


const diretor = new Diretor("Rodrigo", 10000, 123456);
diretor.cadastrarSenha("1234");

const gerente = new Gerente("Ricardo",5000, 654321);

const logado = SistemaAutenticacao.login(diretor, "1234");

const cliente = new Cliente("Lais", 323123233, "434");
const logado2 = SistemaAutenticacao.login(cliente, "43ds4");

console.log(logado);
console.log(logado2);


