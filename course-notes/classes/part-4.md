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

