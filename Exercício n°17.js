
            const humano = 7;
            var idade = 0;
            for(var i = 0; i < humano; i++){
                switch(i){
                    case 0: idade += 15;
                        break;
                    case 1: idade += 10;
                        break;
                    default: idade += 4;
                }
            }
    
            document.write(`A idade do gato é: ${idade}`);