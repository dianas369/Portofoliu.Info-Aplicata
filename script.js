//Cache the DOM
var button=document.getElementById("nutton")
var nume=document.getElementByID("nume")
var nume=document.getElementByID("prenume")
var educatie=document.getElementById("educatie")
var asteptari=document.getElementById("asteptari")


//Add event listener
button.addEventListener("click",altaViata)

//Define function
function altaViata()
{
nume.innerHTML="Engineer"
prenume.innerHTML="Google"
educatie.innerHTML="Experiente"
asteptari.innerHTML="<ul><li>libertate financiara</li><li>Educatie superioara</li></ul>"

body.style.backgroundImage = 
"url('images/field.jpg')"
body.style.backgroundSize = "cover"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundPosition = "center"
body.style.backgroundAttachment = "fixed"

body.style.color = "orange"
body.style.fontFamily = "Montserrat"

img.src="images/varrr.png"
img.style.opacity="70%"
img.style.width="200px"
img.style.height="300px"
img.style.border="3px solid black"





}