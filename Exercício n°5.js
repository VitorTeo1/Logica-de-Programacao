
    function inicio() {
		
        
        var escolha = parseInt(prompt(`Selecione uma opção:
1.) Subtrair
2.) Somar
3.) Multiplicar
4.) Dividir
5.) Sair `));

            switch(escolha) {
    			case 1:
    			subtrair();
				break;
			}
			switch(escolha) {
    			case 2:
    			somar();
				break;
			}
			switch(escolha) {
    			case 3:
    			multiplicar();
				break;
			}
			switch(escolha) {
    			case 4:
    			dividir();
				break;
			}
            switch(escolha) {
    			case 5:
    			sair();
				break;
                default:
    			erro();
			}
        }

function subtrair(){
    let n1 = parseInt(prompt(`Informe o 1° número`));
    let n2 = parseInt(prompt(`Informe o 2° número`));
    alert(`${n1} - ${n2} = ${n1 - n2}`)
    inicio();
}
function somar(){
    let n1 = parseInt(prompt(`Informe o 1° número`));
    let n2 = parseInt(prompt(`Informe o 2° número`));
    alert(`${n1} + ${n2} = ${n1 + n2}`)
    inicio();
}
function multiplicar(){
    let n1 = parseInt(prompt(`Informe o 1° número`));
    let n2 = parseInt(prompt(`Informe o 2° número`));
    alert(`${n1} x ${n2} = ${n1 * n2}`)
    inicio();
}
function dividir(){
    let n1 = parseInt(prompt(`Informe o 1° número`));
    let n2 = parseInt(prompt(`Informe o 2° número`));
    alert(`${n1} / ${n2} = ${n1 / n2}`)
    inicio();
}
function sair() {
			let confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert('Foi um prazer ter você por aqui! Um bolo de cenoura será enviado para sua localização atual.')
				window.close();
			} else {
				inicio();
			}
		}
function erro(){
	alert('Por favor, informe um número entre 1 a 4');
	inicio();
	

}
inicio();