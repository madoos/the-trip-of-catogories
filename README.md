## El viaje de las categorías

[Escucha recomentada](https://www.youtube.com/watch?v=bjN0HDo9u4c)

En un lejano lugar vivía un programa llamado P muy feliz con su fiel compañero Ramda.

```js
const { pipe, prop, toLower, concat, __, assoc } = require("ramda")

// getName :: {name: String} -> String
const getName = prop("name")

// formatEmail :: String -> {email: String}
const formatEmail = pipe(
  toLower,
  concat(__, "@email.com"),
  assoc("email", __, {})
)

// createEmail :: {name: String} -> {email: String}
const createEmail = pipe(
  getName,
  formatEmail
)

module.exports = createEmail
```

P se había esforzado mucho para no tener efectos secundarios y estar compuesto por funciones puras pero en su interior sentía que algo faltaba.

Aprisionado por la pureza de su esencia el programa se encontraba atrapado.

P:
`Si no tengo un efecto tan solo soy ciclos de proceso que se ejecutan y mueren. Sin ningún impacto, sin ninguna finalidad. ¿Acaso existo? ¿cómo puedo mantener mi esencia y ser de utilidad?`

Ramda:
`Para lograr tu objetivo solo hay un camino, tendremos que viajar por el universo de las categorías y encontrar las respuestas.`

Nuestra primera parada será [el mundo de los functores](ch01.md).

P nunca había escuchado hablar de [teoría de categorías](https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/) pero sus anhelos lo llevaban a enfrentar nuevos caminos.

## El viaje

- [En el mundo de los functores](ch01.md)
- [En la tierra del quizá](ch02.md)
- [En la tierra de IO](ch03.md)
