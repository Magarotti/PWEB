var n1 = prompt("Digite um numero");
var n2 = prompt("Digite outro numero")

n1 = parseFloat(n1);
n2 = parseFloat(n2);

var soma = n1+n2;
var sub = n1-n2;
var mult = n1*n2;
var div = n1/n2;
var resto = n1%n2;

alert ("Soma: "+soma + "\nSubtração: " + sub + "\nMultiplicação: " + mult + "\nDivisão" + div + "\nResto da div: " +resto);