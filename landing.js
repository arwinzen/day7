// console.log(document.querySelectorAll("#left-nav-elements li").length);
// console.log(leftNavElements.length);
let leftNavElements = (document.querySelectorAll("#left-nav-elements li"));

for (let i = 0; i < leftNavElements.length; i++) {
    
    leftNavElements[i].addEventListener("click", function (){
        document.querySelector(".selected").classList.remove("selected");
        leftNavElements[i].classList.add("selected");
    })
}