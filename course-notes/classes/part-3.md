## Seção 3

### Aula 16 - Tipos

* O `null` significa ausência de valor, mas esse valor é passado.
* O `undefined` é quando não se é passado valor algum pro objeto.
* Ex. de um objeto javascript:

```JS
var objeto =  {
  propriedade: 'valor',
  propriedade2: 10,
  propriedade3: true
}

objeto.propriedade; // valor;
objeto.propriedade2; // 10;
```

* Exemplo, mais semântico:

```JS
var pessoa ={
  nome: 'Jordana',
  idade: 34,
  altura: 1.67
}

pessoa.nome; // Jordana;
pessoa.altura; // 1.67;
```

> Chamadas à funções

Função nomeada

```js
function myFunction() {
  return 'hello';
}

myFunction();
```

Função anônima atribuída a uma variável

```js
var myVar = function() {
  return 'hello';
}

myVar();
```

### Aula 17 - Métodos de Objeto

Métodos de objeto = funções como valor pra propriedades de um objeto.

> Criar um nova propriedade pra um objeto

```JS

// Visto o seguinte objeto abaixo
var pessoa = {
  nome: 'Joao',
  idade: 30,
}

// Para adicionar uma nova propriedade:
pessoa.cor = 'caucasiano';

// Nova propriedade que será um Método:
pessoa.andar = function() {
  ...
}

// Chamada, como método do objeto:
pessoa.andar();

// Um novo método para incrementar a idade:
pessoa.aniversario = function() {
  pessoa.idade++;
}

// Quando invocado abaixo
pessoa.aniversario();

// O objeto pessoa terá mudado (ex de visto no console do node)
pessoa {
  nome: 'Joao',
  idade: 31,
  cor: 'caucasiano',
  andar: [Function], // método
  aniversario: [Function] // método
}
```

### Aula 18 - Métodos de Objeto
