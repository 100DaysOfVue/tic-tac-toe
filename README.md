# tic-tac-toe

A fun game app.

This app was made for [#100DaysOfCode](https://www.100daysofcode.com/).

This project also belongs to #100DaysOfVue initiative.

## Additional used components

* Only use [Vue.js framework](https://vuejs.org/)

## Learned during the process

* How change the v-data object properties dynamically: instead of use `this.arr[i] = 'a'` it's necesary use the slice methods of arrays `this.arr.slice(i, 1, 'a')`.
* Establish two way data binding. It mean change the properties of the parent component through the child with the `this$emit('methodName', elementToSend)`.
* Use lookup object instead of `if-else` statements.
* Improve my logical thinking to implement all the game functionalities.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
