var n = [];
			n[0] = parseInt(prompt("Insira o 1° Valor"));
			n[1] = parseInt(prompt("Insira o 2° Valor"));
	
			var maior = n[0];
			if(n[1] > maior) alert(`O segundo número é o maior: ${n[1]} `);
			else if(n[1] == n[0]) alert(`Os números são iguais,  valor: ${n[1]}`);
			else if(n[1] < n[0]) alert(`O primeiro número é o maior: ${n[0]} `);