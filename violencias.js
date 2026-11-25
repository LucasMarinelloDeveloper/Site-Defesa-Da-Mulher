/*Botoes de abrir popup */

const cards = document.querySelectorAll('.card-violencia');

cards[0].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto1");
});
cards[1].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto2");
});
cards[2].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto3");
});
cards[3].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto4");
});
cards[4].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto5");
});