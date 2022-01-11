var valor = Number(prompt(`Insira o valor do produto`));
            var aumento = Number(prompt(`Insira a margem de lucro (em porcentagem. Apenas números)`));
    
            var vxa = valor * aumento / 100;
    
            document.write(`O Valor de custo é: ${valor} 
            <br> 
            Com um aumento de ${aumento}% 
            <br>
             <b> Valor total com o aumento é: R$ ${valor + vxa} </b>`);