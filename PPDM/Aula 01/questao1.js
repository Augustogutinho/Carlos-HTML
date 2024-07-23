
//1
function teste(nome) {
    console.log(`Bom dia, ${nome}`)
}
teste(`Carlos`)


//2
function numeroParaMes(numero) {
    switch (numero) {
        case 1:
            return "janeiro";
        case 2:
            return "fevereiro";
        case 3:
            return "março";
        case 4:
            return "abril";
        case 5:
            return "maio";
        case 6:
            return "junho";
        case 7:
            return "julho";
        case 8:
            return "agosto";
        case 9:
            return "setembro";
        case 10:
            return "outubro";
        case 11:
            return "novembro";
        case 12:
            return "dezembro";
        default:
            return "Mês inválido";
    }
}

console.log(numeroParaMes(1));
console.log(numeroParaMes(4));
console.log(numeroParaMes(12));
console.log(numeroParaMes(13));

//3
function comparaNumero(x, y) {
    if (x == NaN || y == NaN) {
        console.log("Um ou mais dos valores não é um número");
    }
    else if (x > y) {
        console.log("O primeiro número é maior que o segundo")
    }
    else if (x < y) {
        console.log("O primeiro número é menor que o segundo")
    }
    else if (x == y) {
        console.log("Numeros iguais");
    }
}
comparaNumero(9, 8)
//4

function trab(salario, trabalho, faltas) {
   let hora = salario / 176
   let extra = hora * 1.50 * trabalho
   let carga = hora * faltas * 8
   let liquido = parseInt(salario) + parseInt(extra) - carga
   console.log(`Salario ${parseInt(salario)} Salario liquido ${parseInt(liquido)} Total de horas extras ${parseInt(extra)} Quantidades de faltas ${parseInt(carga)}`);
}
trab (10000, 80, 50)

//5
const array = [2, 4, 67, 8, 9, 90, 0, "dia", "hoje", "tio", "yellow", "ui"]
function quest5(array) {
    console.log(`${array[0]} ${array[array.length - 1]}`)
}
quest5(array)
