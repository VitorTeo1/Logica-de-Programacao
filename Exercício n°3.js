var n = [];
for(var i = 0; i < 3 ;i++){
    n[i] = parseInt(prompt(`Insira o ${i + 1}° Número`));
}

maior = n[0];
for(var i = 0; i < n.length; i++){
    if(n[i] > maior){
        maior = n[i]
    }
}

document.write(`O maior número entre os escolhidos é: <strong>${maior}</strong>`);