function oddOrEven(){
    var number = document.getElementById("number").value;

    if (number%2 == 0){
        alert(`Seu resultado é par`)
    } else{
        alert(`Seu resultado é impar`)
    }
}