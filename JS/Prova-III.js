function negNullPos(){
    verify = document.getElementById("numero").value
    
    if (verify == 0){
       alert ("Isso aí é nulo que nem o cablo do Edir ksks") 
    }else if (verify <= -1){
        alert ("Isso aí é negativo ")
    }else{
        alert ("Isso aí é positivo, melhor marca de PC")
    }
}