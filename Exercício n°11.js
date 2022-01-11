var n = []; 
var soma = 0;
for(var i = 0; i < 10 ; i++){
    var temp = Number(prompt(`Insira o ${i + 1}° Número`));
    if(!isNaN(temp)){
        n[i] = temp;
        soma += temp;
    }
    else{
        i--;
    }
}

document.write(`
Valores informados: <br>
${n} 
<br> 
<br>
Média aritmética: <br>
<b> ${soma / 10} </b>
`);
