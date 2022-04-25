// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


var arr=JSON.parse(localStorage.getItem("movie")) || [];

  var balanceamount=JSON.parse(localStorage.getItem("amount"));

var amount=document.getElementById("wallet")
    amount.innerText=JSON.parse(localStorage.getItem("amount"))

    


    let moviesdiv=document.getElementById("movies")

async function myfun(){
 
   

    let search=document.getElementById("search").value
    console.log(search)
    

    try{
      let res=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1ef56d05&s=${search}`)

      let data=await res.json();

      console.log(data.Search)

      appendmovies(data.Search)
    }

    catch(e){
      console.log(e.message)

    }

    function appendmovies(data){

    if(data===undefined){
      return false

   


    }
    moviesdiv.innerHTML=null;


    data.map(function(element){

      let div=document.createElement("div")

      let image=document.createElement("img")
      image.src=element.Poster;

      let name=document.createElement("p")
      name.innerText=element.Title;



      let button=document.createElement("button")
      button.innerText="Book Now";


      button.setAttribute("class","book_now")
      button.addEventListener("click",function(){

        show(element)
      })

     


div.append(image,name,button)
moviesdiv.append(div)
    })

  }
}



function show(element){

  let arr=JSON.parse(localStorage.getItem("movie")) || [];
    
  arr.push(element)
  localStorage.setItem("movie",JSON.stringify(arr))


}



