console.log ("working file")
let button = document.getElementById("take-off-button");

console.log(button)
button.addEventListener("click", function (event){
    console.log("clicked!");
    document.body.classList.toggle("active")

})
