var numeros = new Array();  

for(i = 0; i < 3; i++){
    numeros[i] = Number(prompt("Digite um numero: " ));
}

function grande(){
    return Math.max.apply(null,numeros);
}

function ordem(){
    return numeros.sort(function(a,b){return a-b});
}

    alert("Maior numero :" + grande());
    alert("Ordem crescente :" + ordem());