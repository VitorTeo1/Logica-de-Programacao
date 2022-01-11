var n1 = parseInt(prompt('Informe um número'));

if (n1 < 0){
   document.write('Seu número é negativo: ' + n1);
}
else if (n1 > 0){
   document.write('Seu número é positivo: ' + n1);
}
else if (n1 == 0) {
   document.write('Seu número é: ' + n1);
}
else{
   document.write('Por favor insira apenas números ');
}