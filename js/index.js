// Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele.
const botao = document.querySelector(".btn-plataforma");

// Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado.
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

// Passo 3 - pegar o clique do usuário.
botao.addEventListener("click", () => {
    // Passo 4 - quando o usuário clicar, adicionar a classe .ativo na listagem de plataformas dentro do botão para que o conteúdo apareça.
    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    elementoPlataformas.classList.toggle("ativo");

    // if(botaoEstaAberto) {
    //     elementoPlataformas.classList.remove("ativo");
    // }else{
    //     elementoPlataformas.classList.add("ativo")
    // }

});

// Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão de fechar, o conteúdo deve ser escondido. 
