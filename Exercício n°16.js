var n1 = parseInt(prompt('Digite sua 1ª nota'));
var n2 = parseInt(prompt('Digite sua 2ª nota'));
var media = (n1 + n2) / 2;

if (media >= 7){
    document.write('Aprovado, sua média é: ' + media)
}
else{
    document.write('Reprovado, sua média é: ' + media)
}
