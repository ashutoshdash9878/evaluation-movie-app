// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


var amount=document.getElementById("wallet")
    amount.innerText=JSON.parse(localStorage.getItem("amount"))

    var movi=JSON.parse(localStorage.getItem("movie")) || [];
    console.log(movi);




    movi.map(function(element){
      var div=document.createElement("div")


      var image=document.createElement("img")
        image.src=element.Poster

      var title=document.createElement("h2")
      title.innerText=element.Title
    
    div.append(title,image)

    document.getElementById("movie").append(div)
    
    })
