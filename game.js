  var counti=2;
  var counti2;
  var gcount=1;
  var id1;
  var id2;

  for(i=1;i<=16;i++){
  
  

  function myfunction3(){
  
  
  var x= Math.floor((Math.random() * 16) + 1);
  
  
  
  document.getElementById("tid"+x).style.backgroundColor="white";
  const tmout1= setTimeout(myfunction2,1000);
    
    function myfunction2(){
    document.getElementById("tid"+x).style.backgroundColor="black";
  }
  
  id1= document.getElementById("tid"+x).id;
  
}

let z= document.querySelectorAll("div")[i].addEventListener("click",function() {
  id2= this.id;
  if(id1==id2&counti<17){
    alert("Wow!, Right choice. Moving to level "+counti);
    counti++;
    
  }
  else{
    alert("Game over!!. Let's start from begginning");
    counti=2;
  }

  this.style.backgroundColor="orange";
  const tmout1= setTimeout(myfunction2,1100)
    function myfunction2(){
    for(j=1;j<=16;j++){
    document.querySelectorAll("div")[j].style.backgroundColor="black";
    }
  }
  
})
} 
myInterval = setInterval(myfunction3,2000);
if(counti=3){
  clearInterval(myInterval);
}

