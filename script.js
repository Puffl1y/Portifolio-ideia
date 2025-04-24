const projetos = {
    convites: [
      { nome: "Convite Interativo Feminino rosa", imagem: "convites/fem-int-rosa.jpg" },
      { nome: "Convite Interativo Maculino Verde", imagem: "convites/masc-int-verde.jpg" },
      { nome: "Convite Interativo Feminino Verde", imagem: "convites/fem-int-verde.jpg" },
      { nome: "Lista de Presentes Feminino Verde", imagem: "convites/fem-presentes.jpg" }
    ],
    simples: [
      { nome: "Convite Feminino Estampa", imagem: "convites/Fem-farm.jpg" },
      { nome: "Convite Masculino Vermelho", imagem: "convites/masc-azul-folha.jpg"},
      { nome: "Convite Feminino Flores Laranja", imagem: "convites/fem-flores-laran.jpg" },
      { nome: "Convite Masculino Azul", imagem: "convites/masc-vermelho.jpg" },
      { nome: "Convite Feminino Rosa e Laranja", imagem: "convites/fem-rosa.jpg" },
      { nome: "Convite Masculino Azul", imagem: "convites/masc-azul.jpg" },
      { nome: "Convite Feminino Verde", imagem: "convites/fem-verde.jpg" }
    ],
    folhetos: [
      { nome: "Folheto 1", imagem: "convites/folder-1.jpg" },
      { nome: "Folheto 2", imagem: "convites/folder-2.jpg" },
      { nome: "Folheto 3", imagem: "convites/folder-3.jpg" }
    ]
    // publicacoes: [
    //  { nome: "Post Instagram 1", imagem: "img/post1.jpg" }
    // ]
  };
  
  let projetosAtuais = [];
  
  function mostrarCatalogo(tipo) {
    const catalogo = document.getElementById("catalogo");
    const titulo = document.getElementById("tituloCatalogo");
  
    projetosAtuais = projetos[tipo] || [];
    titulo.textContent = `Catálogo de ${tipo}`;
    catalogo.classList.remove("escondido");
    atualizarListaProjetos(projetosAtuais);
  }
  
  function atualizarListaProjetos(listaProjetos) {
    const lista = document.getElementById("listaProjetos");
    lista.innerHTML = "";
  
    listaProjetos.forEach(projeto => {
      const div = document.createElement("div");
      div.className = "projeto";
      div.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.nome}">
        <h3>${projeto.nome}</h3>
      `;
      lista.appendChild(div);
    });
  }
  
  function filtrarProjetos() {
    const termo = document.getElementById("busca").value.toLowerCase();
    const filtrados = projetosAtuais.filter(p => p.nome.toLowerCase().includes(termo));
    atualizarListaProjetos(filtrados);
  }
  