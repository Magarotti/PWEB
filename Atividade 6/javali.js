var nome = prompt("Digite o nome do aluno:");
var n1 = prompt("nota 1");
var n2 = prompt("nota 2");
var n3 = prompt("nota 3");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);

var media = (n1+n2+n3)/3;

alert ("aluno: " + nome + " Media: " + media);
