var soma = 0;
            for(var i = 0; i < 10 ; i++){
                var temp = Number(prompt(`Insira o ${i + 1}° Número`));
                if(!isNaN(temp)){
                    soma += temp;
                }
                else{
                    i--;
                }
            }
    
            document.write(`
            Soma dos valores informados: <br>
            <b>${soma} </b>
            `);
        