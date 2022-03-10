let slider = document.querySelector(".slider-content")
let sliderIndividual = document.querySelectorAll(".content-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 6000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides (){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "all 1s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}
