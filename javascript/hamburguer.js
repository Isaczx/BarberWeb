const menu = document.querySelector(".material-symbols-outlined");
const opcaos = document.querySelector("#menu");
const menuh = document.querySelector("#menuh");
const lista = document.querySelector("#menuh ul");

console.log(opcaos);


menu.addEventListener("click", () =>{

    if (menuh.style.display == "block") {
        menuh.style.display = "none";
        lista.style.display = "none";
    }else{
        menuh.style.display = "block";
        lista.style.display = "flex";
    }
})