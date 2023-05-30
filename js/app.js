const img1 = document.getElementById ('proyect__img__1');
const img2 = document.getElementById ('proyect__img__2');
const item1 = document.getElementById ('proyects__items__1');
const text1 = document.getElementById ('proyect__text__1');
const item2 = document.getElementById ('proyects__items__2');
const text2 = document.getElementById('proyect__text__2');
const text3 = document.getElementById('proyect-title');

const cargarImg = (entradas, observador) => {
    //console.log(entradas)
    //console.log(observador)

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
}

const observador = new IntersectionObserver (cargarImg,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5

});

observador.observe(img1);
observador.observe(img2);
observador.observe(item1);
observador.observe(text1);
observador.observe(item2);
observador.observe(text2);
observador.observe(text3);