let header = document.querySelector(".header");
let tituloEL = document.querySelector(".titulo-el");
let liTema = document.querySelector(".tema");
let liMenu = document.querySelectorAll(".nav__elemento-ul-li");
let tituloDW = document.getElementById("titulo-dw");
let parrafoHeader = document.getElementById("p-info");
let body = document.getElementById("body");
let btnTrabajos = document.getElementById("btn-trabajos");
let tituloTrabajosDos = document.querySelector(".trabajos");

let check = document.getElementById("switch");
check.addEventListener('click', function(){
    let tema = document.getElementById("switch").checked;
    if(tema){
        header.style.backgroundColor = "#eee";
        tituloEL.style.color = "#000";
        tituloEL.style.textShadow = "2px 2px 5px #fff";
        liTema.style.color = "#777";
        for (let i = 0; i < liMenu.length; i++) {
            liMenu[i].style.color = "#333";
            liMenu[i].style.textShadow = "2px 2px 5px #fff";
        }
        tituloDW.style.color = "#000";
        tituloDW.style.textShadow = "2px 2px 15px #aaa";
        parrafoHeader.style.color = "#000";
        parrafoHeader.style.textShadow = "2px 2px 5px #888";
        body.style.backgroundColor = "#eee"
        btnTrabajos.style.border = "2px solid #000";
        tituloTrabajosDos.style.color = "#000";
        tituloTrabajosDos.style.textShadow = "2px 2px 5px #aaa";
    }else{
        header.style.backgroundColor = "#333"
        tituloEL.style.color = "#fff";
        liTema.style.color = "#fff";
        tituloEL.style.textShadow = "2px 2px 5px #C00606";
        for (let i = 0; i < liMenu.length; i++) {
            liMenu[i].style.color = "#bbb";
            liMenu[i].style.textShadow = "2px 2px 5px #333";
        }
        tituloDW.style.color = "#fff";
        tituloDW.style.textShadow = "2px 2px 15px #000";
        parrafoHeader.style.color = "#ddd";
        parrafoHeader.style.textShadow = "2px 2px 5px #111";
        body.style.backgroundColor = "#111";
        btnTrabajos.style.border = "1px solid #fff";
        tituloTrabajosDos.style.color = "#fff";
        tituloTrabajosDos.style.textShadow = "2px 2px 5px #000";
    }
});

let paginaParadise = document.getElementById("paradise");
let paginaMvp = document.getElementById("mvp");
let proyectoCarreraDebarriles= document.getElementById("carreradebarriles");

paginaParadise.addEventListener('click', function(){
    location.href = "https://paradiseventacasas.000webhostapp.com";
});

paginaMvp.addEventListener('click', function(){
    location.href = "https://mvpmx.000webhostapp.com";
});

proyectoCarreraDebarriles.addEventListener('click', function(){
    location.href = "https://1drv.ms/p/s!AmUjgZM7Yy7aiMsXXT9xoi8c10sjnw?e=sA9ZLs";
});

btnTrabajos.addEventListener('click', function(){
    location.href = "#proyectos";
});