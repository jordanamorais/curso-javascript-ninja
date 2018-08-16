## Seção 4

### Aula 21 - Truthy e Falsy

> Thuthy - representado por `true`.

```JS
[] // Array vazio
{} // Objeto vazio
"0" // String preenchida seja qual for é Truthy, porque é uma string com valor.
```

> Falsy - representado por `false`.

```JS
undefined
0
null
NaN
-0
`` ou "" // String vazias, com aspas simples ou duplas. 
false // O valor false também é false
```

> Descobrir representação booleana sem usar os ifs

```JS
!true // false. Um unico sinal de ! converte e inverte o valor
!!true // true. Exibe o valor booleando verdadeiro 
```

Javascript já faz conversão de tipos.

### Aula 22 - Condicional Ternário

```js
var sexo = pessoa.sexo === 'Feminino' ? 'a' : 'o';
```

### Aula 23 - Escopo de variáveis

* Escopo Global - Sempre fora de uma função. No geral, acaba sendo ruim pois insere muitas variáveis ou lixo na memória, utilizando muito recurso do seu computador.
* Escopo Local - Dentro de funções. Recomendado utilizar sempre escopo local. Argumentos de funções são sempre locais também.
* JS tem Garbage Collector, eliminando da memória o espaço que a variável de escopo local estava ocupando.
* Caso se crie uma variável sem a palavra chave `var` essa variável será considerada como Global, mesmo se for definida dentro de uma `function()`.

