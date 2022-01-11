var n = [];
for(var i = 0; i < 3 ;i++){
    n[i] = parseInt(prompt(`Insira o ${i + 1}° Número`));
}

var maior;
var segundoMaior;
for(var i = 0; i < n.length; i++){
    if(n[i] > maior || i == 0){
        maior = n[i];
    }
}

for(var i = 0; i < n.length; i++){
    if(n[i] < maior){
        if(n[i] > segundoMaior || typeof segundoMaior === "undefined") segundoMaior = n[i];
    }
    
}

document.write(`
Os dois maiores números são: <strong>${segundoMaior} e ${maior}</strong>
<br>
<br>
A soma entre eles é: ${maior + segundoMaior}
`);
