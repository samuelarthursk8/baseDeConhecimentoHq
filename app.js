function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos e o valor do campo de pesquisa.
  const section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Valida se o campo de pesquisa não está vazio.
  if (!campoPesquisa) {
    // Exibe uma mensagem de erro caso o campo esteja vazio.
    section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de uma HQ ou obra. </p>";
    return;
  }

  // Normaliza o texto da pesquisa para facilitar a comparação.
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa variáveis para armazenar os resultados da pesquisa.
  let resultados = "";

  // Itera sobre cada dado da lista de HQs.
  for (const dado of dados) {
    // Normaliza o título, descrição e tags para facilitar a comparação.
    const titulo = dado.titulo.toLowerCase();
    const descricao = dado.descricao.toLowerCase();
    const tags = dado.tags.toLowerCase();

    // Verifica se o título ou as tags contêm o termo de pesquisa.
    if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói a HTML para exibir um resultado da pesquisa.
      resultados += `
        <div class="item-resultado">
          </div>
      `;
    }
  }

  // Exibe os resultados da pesquisa ou uma mensagem de que nada foi encontrado.
  section.innerHTML = resultados || "<p> Nada foi encontrado. </p>";
}