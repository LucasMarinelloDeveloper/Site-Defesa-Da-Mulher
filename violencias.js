/*Botoes de abrir popup */

const botoesAbrir = document.querySelectorAll('.card-violencia');
const botoesFechar = document.querySelectorAll('.popup__botao');
const popups = document.querySelectorAll('.popup1, .popup2, .popup3, .popup4, .popup5');

// Abre o popup correspondente ao card clicado
botoesAbrir.forEach((botao, index) => {
    botao.addEventListener("click", function() {
        document.body.classList.add(`popup--aberto${index + 1}`);
    });
});

// Fecha ao clicar no "X"
botoesFechar.forEach((botao, index) => {
    botao.addEventListener("click", function() {
        document.body.classList.remove(`popup--aberto${index + 1}`);
    });
});

// Fecha ao clicar no fundo escuro fora da caixa do popup
popups.forEach((popup, index) => {
    popup.addEventListener("click", function(evento) {
        if (evento.target === popup) {
            document.body.classList.remove(`popup--aberto${index + 1}`);
        }
    });
});