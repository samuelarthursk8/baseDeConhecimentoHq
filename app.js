function pesquisar() {
  const section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  let imagemHq = document.getElementById("imagem-hq");

  if (!campoPesquisa) {
    section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de uma HQ ou obra. </p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let mensagem = "";
  let tags = "";
  let imagem = "";

  for (const dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados +=`
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <hr>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais Informações</a>
          <hr>
          ${dado.mensagem}
        </div>
        <img src="${dado.imagem}"/>
      `;
    }
  }

  if (!resultados){
    resultados = "<p> Nada foi encontrado. </p>";
  }

  section.innerHTML = resultados;

}