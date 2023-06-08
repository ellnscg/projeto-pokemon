const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
const imagemBotaotrocaDeTema = document.
   querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
   
   const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

   if (modoEscuroEstaAtivo){
      body.classList.remove("modo-escuro");

      imagemBotaotrocaDeTema.setAttribute("src", "src/imagens/imagens/sun.png")

   } else {
      body.classList.add("modo-escuro");


   imagemBotaotrocaDeTema.setAttribute("src", "src/imagens/imagens/moon.png");
}
});



