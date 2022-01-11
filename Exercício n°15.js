const drone = 8190;

var quant = parseFloat(prompt("Insira quantas parcelas você deseja pagar: (até 15 vezes sem juros) "));

if(quant <= 0){
    document.write('Use apenas números positivos de 1 a 15');
}

else if(quant <= 15){
    parseFloat(document.write ( `Você ira pagar R$${drone / quant} em ${quant} parcelas sem juros.`));
}

else{
    document.write(`${quant} parcelas não são aceitas sem juros` );
}
