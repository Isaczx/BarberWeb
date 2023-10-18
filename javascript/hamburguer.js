const menu = document.querySelector(".material-symbols-outlined");
const opcaos = document.querySelector("#menu");
const opcaos2 = document.querySelector("#menuh");

console.log(opcaos);


menu.addEventListener("click", () =>{

    if (opcaos2.style.display == "block") {
        opcaos2.style.display = "none";
    }else{
     opcaos2.style.display = "block";
    }
})