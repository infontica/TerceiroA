class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
exibirinformacoes() {
    return `${this.titulo} por ${this.autor}, publicado em ${this.ano}`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }
adicionarLivro (livro) {
    this.livros.push(livro);
    this.atualizarLista();
}
removerLivro(titulo) {
    this.livro = this.livros.filter(livro => livro.titulo !== titulo);
    this.atualizarLista();
}
listarLivros() {
    return this.livros.map (livro => livro.exibirinformacoes()).join('<br>');
}
atualizarLista() {
    const listaLivros = document.getElementById('lista-livros');
    listaLivros.innerHTML = this.listarLivros();
    }
}

const biblioteca = new Biblioteca();

function enviarFormulario(evento) {
    evento.preventDefault();
    const titulo = document.getElementById('titulo').value; 
    const autor = document.getElementById('autor').value; 
    const ano = document.getElementById('ano').value; 

    const livro = new Livro (titulo, autor, ano);
    biblioteca.adicionarLivro(livro);
    document.getElementById('formulario').reset();
}
document.getElementById('formulario').addEventListener('submit', enviarFormulario);