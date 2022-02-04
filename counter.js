var numberPrint = document.getElementById("zero")
let count = 0
numberPrint.innerText = count
function myfunctionDec(){
    count--
    numberPrint.innerText = count
}
function myfunctioninc(){
    count++
    numberPrint.innerText = count
}
function reset(){
    count =0
    numberPrint.innerText = count
}