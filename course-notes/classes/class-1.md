## Class 1 Notes

### NodeJS

To view node interface/console:

```npm
node
```

### Data Types

Basically _number_, _boolean_, _string_, _null_ , _undefined_ and **objects** ( {} )
and **arrays** ( [] ).

> Objects:

**OBS:** Objects are faster than arrays. So, prefer use objects instead of arrays.

```js
var person = {
  height: 1.87,
  weight: 90, //kg
}

// To access object values:
person.height;
person.weight;
// or
person["altura"];
person["weight"];
```

> Array

**OBS:** Arrays in JS are _objects_.

```js
// Empty array
var numbers = [];

// Array with numbers
var numbers = [1, 2, 3, 4];

numbers[0]; // = 1
numbers[1]; // = 2
```

### Operators

```js
var x = 0; // attribute value
x == 0; // true
1 == 1; // true
1 != 2; // true
2 != 2; // false
```

> Operators which test the Data Type too ( === ) and ( !== )

**OBS:** This way is more safe to use. Always test types too.

```js
var one = '1'; // string
var numberOne = 1; // number

one == numberOne; // true, because JS Type Conversion. 1 == '1'.
one === numberOne; // false, because you are comparing types too. One is string and the other one is number, which means, different types
```

The other operators: _>_, _<_ , _>=_, _<=_.
Operator to invoke functions: ();

### Functions

* Function variables are scoped for its respective functions.
* Functions must return something.
