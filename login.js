document.querySelector("#button").addEventListener("click", loginfun);


var regData=JSON.parse(localStorage.getItem("custmrData"))
function loginfun() {
  event.preventDefault();
 
    var email= document.querySelector("#email").value;
   var pass= document.querySelector("#pass").value;
 
    var flag=false;
  for( var i=0;i<regData.length;i++)
  {
     if(regData[i].email==email && regData[i].pass== pass)
        {
           flag=true;  
        }

  }
   if(flag==true){
     alert("Login Sucess");
     window.location.href="index.html";
   }
    else{
    alert("Login failed");
    } 

}
