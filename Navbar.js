
document.addEventListener("click", e =>{
    const isDropdownButton = e.target.matches("[db]")
    if(!isDropdownButton && e.target.closest ("[dd]") != null)return

    let cd 
    if(isDropdownButton){
        cd = e.target.closest ("[dd]")
        cd.classList.toggle("active")

    }


    document.querySelectorAll("[dd].active").forEach( dropdown =>{
        if(dropdown === cd) return
        dropdown.classList.remove("active")
    })


})


function fun(){
    window.location.href="earphone.html"
}