// Elementos que serão usados na página
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoArea = document.getElementById("area");
const resultado = document.getElementById("resultado");
const tituloResultado = document.getElementById("tituloResultado");
const mensagemResultado = document.getElementById("mensagemResultado");

const btnTema = document.getElementById("btnTema");
const textoTema = document.getElementById("textoTema");
const iconeTema = document.getElementById("iconeTema");

// Mostra uma orientação de acordo com a área escolhida
function gerarOrientacao(nome, area) {
    let titulo = "";
    let mensagem = "";

    switch (area) {
        case "html":
            titulo = "Comece pela estrutura das páginas!";
            mensagem = "Olá, " + nome + "! No HTML, pratique o uso de títulos, parágrafos, links, imagens e formulários. Aprenda também a organizar o conteúdo com elementos semânticos.";
            break;

        case "css":
            titulo = "Dê vida às suas páginas!";
            mensagem = `Olá, ${nome}! Continue praticando cores, espaçamentos, seletores, Flexbox, Grid e responsividade. Teste diferentes combinações para entender como o visual muda.`;
            break;

        case "javascript":
            titulo = "Hora de deixar tudo interativo!";
            mensagem = `Olá, ${nome}! Pratique variáveis, funções, condições e eventos. Depois, experimente selecionar elementos do HTML e alterar o conteúdo da página com JavaScript.`;
            break;

        default:
            titulo = "Escolha uma área para continuar.";
            mensagem = "Selecione HTML, CSS ou JavaScript para receber uma orientação.";
    }

    tituloResultado.textContent = titulo;
    mensagemResultado.textContent = mensagem;
    resultado.hidden = false;
}

// Quando o formulário for enviado, verifica os campos
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const area = campoArea.value;

    if (nome === "") {
        tituloResultado.textContent = "Só falta seu nome!";
        mensagemResultado.textContent = "Preencha o campo de nome para receber sua orientação.";
        resultado.hidden = false;
        campoNome.focus();
    } else if (area === "") {
        tituloResultado.textContent = `Tudo certo, ${nome}!`;
        mensagemResultado.textContent = "Agora escolha uma área: HTML, CSS ou JavaScript.";
        resultado.hidden = false;
        campoArea.focus();
    } else {
        gerarOrientacao(nome, area);
    }
});

// Alterna entre o tema claro e o tema escuro
btnTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");

    const temaEscuroAtivo = document.body.classList.contains("tema-escuro");

    if (temaEscuroAtivo) {
        textoTema.textContent = "Tema claro";
        iconeTema.textContent = "☀";
    } else {
        textoTema.textContent = "Tema escuro";
        iconeTema.textContent = "☾";
    }
});
