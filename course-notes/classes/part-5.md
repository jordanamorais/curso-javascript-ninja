## Seção 5

### Aula 28 - Retorno de funções com arrays e objetos

* Objetos e funções são a base do Javascript.
* Valores primitivos: `number`, `string`, `boolean`, `undefined` e `null`
* Ao executar o return, se sai da função.
* Funções também podem retornar arrays e objetos.

> Retornando Array

```js
function myFunction() {
  return [1,2,3];
}

myfunction()[0]; // 1
myfunction()[2]; // 3
myfunction()[5]; // undefined. Índice não existe.
```

> Retornando Objeto

```js
function myFunction() {
  return {
    prop1: 1,
    prop2: 'jordana',
    prop3: function() {
      return 'prop3';
    }
  };
}

myFunction(); // Retornaria o objeto todo

myFunction().prop1; // 1

var values = myFunction(); // Preenche o values como objetos, com os objetos retornados da função.
```
