var ver = document.getElementById('ver-mais');

ver.addEventListener("click", function () {
    var estilos = document.getElementById("estilos-div2")
    var animacao = document.getElementsByClassName("card-danca-baixo")

    if (estilos.style.display === "flex") {
        ver.innerHTML = `<span class="button_top">
                            VER MAIS!
                        </span>`
        for (var i = 0; i < animacao.length; i++) {
            animacao[i].style.animationName = "entrada-baixo"
        }
        setTimeout(() => {
            estilos.style.display = "none";
        }, 380)

    }
    else {
        estilos.style.display = "flex";
        ver.innerHTML = `<span class="button_top">
                            VER MENOS
                        </span>`
        for (var i = 0; i < animacao.length; i++) {
            animacao[i].style.animationName = "entrada-cima"
        }
    }
});