/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray =  [ 1,'jordana',3,'ola',50 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(myArray)[2]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getIndexOfArray(arr, index) {

  var arrayMaxSize = arr.length;

  if (index <= arrayMaxSize) {
    return "Segue o valor do índice " + index + " do array passado: " + arr[index];
  } else {
    return "O array passado por parâmetro possui um tamanho máximo de " + arrayMaxSize + ". Por favor insira um índice dentro do tamanho máximo do array.";
  }
}

// Get array, passing the index
console.log(getIndexOfArray(myArray, 2));

// Validate if index is > than the array max size
console.log(getIndexOfArray(myArray, 10));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var crazyArray = [1, 'coelho', null, true, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for(i = 0; i < 5; i++) {
  console.log(getIndexOfArray(crazyArray, i));
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {

  var bookList = {
    "Understanding UX": {
      quantidadePaginas: 10,
      autor: 'Jordana',
      editora: 'Altabooks'
    },
    "Disney The Illusion of Art": {
      quantidadePaginas: 120,
      autor: 'Walt Disney',
      editora: 'Pixar Editora'
    },
    "O Proposito": {
      quantidadePaginas: 66,
      autor: 'Sri Prem Baba',
      editora: 'Zen'
    },
  };

  return !bookName ? bookList : bookList[bookName];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = "Understanding UX";

console.log("O Livro " + bookName + " tem " + book(bookName).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + bookName + " é: " + book("Understanding UX").autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + bookName + " foi publicado pela editora: " + book(bookName).editora + ".");
