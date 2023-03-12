const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    console.log(indice);

    desativarBotao();

    botao.classList.add("selecionado");

    esconderImagemAtiva();

    imagens[indice].classList.add("ativa");
  });
});

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotao() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
