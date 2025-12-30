function calc(v,d){
    var c = v-d
    if(c<=10){
        return "Ferro"
    }if(c<=20){
        return "Bronze"
    }if(c<=50){
        return "Prata"
    }if(c<=80){
        return "Ouro"
    }if(c<=90){
        return "Diamante"
    }if(c<=100){
        return "Lendário"
    }return "Imortal"
}
var vitórias = 200;
var derrotas = 190;
console.log(calc(vitórias,derrotas))