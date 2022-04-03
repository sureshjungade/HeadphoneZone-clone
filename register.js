  document.querySelector("#button").addEventListener("click", regfun);
   
  var regData=JSON.parse(localStorage.getItem("custmrData"))||[];
  function regfun()
  {
      event.preventDefault();

    var regobj ={
          email:document.querySelector("#email").value,
          name:document.querySelector("#name").value,
          last:document.querySelector("#lastname").value,
          pass:document.querySelector("#pass").value,
    }
     
    regData.push(regobj);// here is code working
    //console.log(regData)

    localStorage.setItem("custmrData",JSON.stringify(regData))
    window.location.href="login.html"

  }