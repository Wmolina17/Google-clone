var addAtajo = document.querySelector("#add-atajo")
var fontO = document.querySelector(".add-more")
var boxAdd = document.querySelector(".box-add")
var b1 = document.querySelector(".bt-1")
var b2 = document.querySelector(".bt-2")
var dots = document.querySelector("#dot-9")
var mA = document.querySelector(".multi-apps")
var body = document.querySelector(".body")
var miniFt = document.querySelector(".por")
var imgMas = document.querySelector(".mas-perfil")

addAtajo.onclick = () =>{
    fontO.classList.remove("non-visible-1")
    boxAdd.classList.remove("non-visible-2")
}
b2.onclick = () =>{
    fontO.classList.add("non-visible-1")
    boxAdd.classList.add("non-visible-2")
}
b1.onclick = () =>{
    fontO.classList.add("non-visible-1")
    boxAdd.classList.add("non-visible-2")
}
dots.onclick = () =>{
    mA.classList.remove("non-visible-1")
}
body.onclick = () =>{
    mA.classList.add("non-visible-1")
    imgMas.classList.add("non-visible-1")
}
miniFt.onclick = () =>{
    imgMas.classList.remove("non-visible-1")
}


