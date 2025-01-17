alert("Boas vindas ao nosso site!");

let name = "lua";
let age = 25;
let numeroDeVendas = 50;
let saldoDisponível = 1000;

let mensagemDeErro = "Erro! Preencha todos os campos"
alert(mensagemDeErro);

let nome = prompt("Qual o nome do usuário?")
let idade = prompt("Digite a sua idade")

if (idade >= 18) {
    alert("Pode tirar a habilitação!")
} else {
    alert("Você não pode tirar habilitação no momento")
};