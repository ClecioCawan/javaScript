function somar(){
    var tn1 = window.document.getElementById("txtn1")
    var tn2 = window.document.querySelector("input#txtn2")
    var res = window.document.getElementById("res")
    var n1 = Number.parseInt('tn1.value')
    var n2 = Number.parseInt('tn2.value')
    var soma = n1 + n2
    res.innerText = `A soma de ${n1} e ${n2} = ${soma}.` 
}   
/*window.alert("olá, Mundo")*/