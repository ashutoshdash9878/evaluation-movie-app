// Store the wallet amount to your local storage with key "amount"
console.log("connet")




var amount=document.getElementById("wallet")
amount.innerText=JSON.parse(localStorage.getItem("amount"))




function myfun(){
 
var arr=JSON.parse(localStorage.getItem("amount")) || [];

console.log(arr)


var input=Number(document.getElementById("amount").value)



localStorage.setItem("amount",JSON.stringify(input)); 

console.log(input)



window.location.reload()


}

