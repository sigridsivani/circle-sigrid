console.log ("working file")
let likebutton = document.getElementById("like-button");

console.log(likebutton)
likebutton.addEventListener("click", function (event){
    console.log("clicked!");
    document.body.classList.toggle("active")

})

