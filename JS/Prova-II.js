function foreverYoung(){
    var age = document.getElementById ("age").value

    if (age >= 18 <=60){
        alert ("Você é um adulto, vai pagar suas contas")
    }
    else if (age >= 12){
        alert ("Você é um adolescente, boa sorte com a puberdade")
    }
    else if (age >= 60){
        alert ("Você é velho, já deu a hora de comprar mais omega 3")
    }
    else{
        alert ("Você é uma criança insuportavel, não enche")
    }
}