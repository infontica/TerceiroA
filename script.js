// Classe Livro
class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    // Método para exibir informações do livro
    exibirInformacoes() {
        return `${this.titulo} por ${this.autor}, publicado em ${this.ano}`;
    }
}

// Classe Biblioteca
class Biblioteca {
    constructor() {
        this.livros = [];
    }

    // Método para adicionar um livro
    adicionarLivro(livro) {
        this.livros.push(livro);
        this.atualizarLista();
    }

    // Método para remover um livro pelo título
    removerLivro(titulo) {
        this.livros = this.livros.filter(livro => livro.titulo !== titulo);
        this.atualizarLista();
    }

    // Método para listar todos os livros
    listarLivros() {
        return this.livros.map(livro => livro.exibirInformacoes()).join('<br>');
    }

    // Método para atualizar a lista de livros na interface
    atualizarLista() {
        const listaLivros = document.getElementById('lista-livros');
        listaLivros.innerHTML = this.listarLivros();
    }
}

// Instância da classe Biblioteca
const biblioteca = new Biblioteca();

// Função para lidar com o envio do formulário
function enviarFormulario(evento) {
    evento.preventDefault();
    
    // Obtém os dados do formulário
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    
    // Cria uma nova instância de Livro
    const livro = new Livro(titulo, autor, ano);
    
    // Adiciona o livro à biblioteca
    biblioteca.adicionarLivro(livro);
    
    // Limpa o formulário
    document.getElementById('formulario').reset();
}

// Adiciona um listener ao formulário para lidar com o envio
document.getElementById('formulario').addEventListener('submit', enviarFormulario);
