/*---shape--*/
// collect the elements
let shape = document.querySelector(".shapeDiv")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")
let btncircle = document.querySelector(".btncircle")
let displayshape = document.querySelector(".shapeDiv p")

//Adding an event to each button
btnsquare.addEventListener("click", function(){
    shape.className = "square"
    displayshape.textContent = "square".toUpperCase()
   
})

btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
    displayshape.textContent = "Rectangle".toUpperCase()


})

btncircle.addEventListener("click", function(){
    shape.className = "circle"
    displayshape.textContent = "Circle".toUpperCase()
    

})

/*----
*DROP DOWN MENU--*/
//COLLECT THE ELEMENT
let menubtn = document.querySelector(".menubtn")
let collapsemenu = document.querySelector(".collapsemenu")

//add click event to open the collapsible menu
menubtn.addEventListener("click", function(){
    collapsemenu.classList.toggle("closeToOpen")
})

/*-----Modal WIndow--*/
//collect the element
let card = document.querySelector(".card")
let modalwindow = document.querySelector(".modalwindow")
let closemodal = document.querySelector(".closemodal")

//add a click event to open modal window
card.addEventListener("click", function(){
    modalwindow.style.display = "block"
})

//close the modal window by clicking on x
closemodal.addEventListener("click", function(){
    modalwindow.style.display = "none"
})

//close the modal window when user clicks amywhere on the modal screen 
window.addEventListener("click", function(event){
    if(event.target == modalwindow){
        modalwindow.style.display = "none"
    }
})