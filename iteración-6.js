
// **Iteración #6: Mixed For e includes**

// Usa un bucle **for** para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
// Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:


const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]


    toys.forEach (function (element, index, array) {
     if (toys[index].name.includes('gato')) {
         toys.splice(index);
     }
     console.log(toys);
 })