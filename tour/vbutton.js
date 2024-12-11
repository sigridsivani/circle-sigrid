console.log ("working file")
let vbutton = document.getElementById("vbutton");
let mapv = document.getElementById("mapv");

console.log(vbutton);
vbutton.addEventListener("click", function (event){
    console.log("clicked!");
    vbutton.classList.add("spin");
    mapv.classList.toggle("active");
    setTimeout(() => {
        vbutton.classList.remove("spin");
    }, 500);

});
