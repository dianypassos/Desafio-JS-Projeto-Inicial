alert("Boas vindas ao nosso site!");

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponível = 1000;

let mensagemDeErro = "Erro! Preencha todos os campos"
alert(mensagemDeErro);

nome = prompt("Qual o nome do usuário?")
idade = prompt("Digite a sua idade")

if (idade >= 18) {
    alert("Pode tirar a habilitação!")
} else {
    alert("Você não pode tirar habilitação no momento")
};