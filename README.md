# Funcionamiento de la API

## Herramientas
- [POSTMAN](https://www.getpostman.com/) -> Para jugar con las API
- [JSONVIEW](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=fr) -> ver JSON correctamente en Chrome

## Prólogo

El objetivo de esta secuencia educativa es permitirle descubrir las API por sí mismo. Por supuesto, se deslizarán pistas aquí y allá en los ejercicios para guiar su investigación.

A través de esta URL https://project-622bb.firebaseio.com/BeCode.json se muestra toda la información que se puede recibir de esta API.

Diferencias entre conexión síncrona y asíncrona

Use esta URL en su navegador o en Postman para realizar llamadas y búsquedas a la API de wikipedia.
https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=earth o https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=earth

- [documentación](https://www.mediawiki.org/w/api.php?action=help&modules=opensearch)


## Ejercicio [wikinside.html](https://cevaho.github.io/API-fetch-wikipedia/wikinside.html)

Usa la misma API. En lugar de buscar a través de su navegador o Postman, busque usando una entrada en su HTML.
- Al enviar, muestre los resultados de su búsqueda en su HTML en un iframe.
- Al hacer clic en una de las respuestas, cambia la visualización del iframe
- al registrar la investigación, dar una lista de propuestas
- al hacer clic en una propuesta, mostrar la respuesta para esta propuesta


## Ejercicio [onkeyup.html](https://cevaho.github.io/API-fetch-wikipedia/onkeyup.html)

Cree una función que permita la búsqueda instantánea con un búfer. Bertrand llama "almacenamiento en búfer" al hecho de lanzar la búsqueda hacia el servidor solo cuando no se ha escrito nada en la entrada después de un tiempo (por ejemplo, dos segundos). Automáticamente, esto se hará de forma asíncrona.