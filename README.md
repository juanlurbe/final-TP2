# Final TP2
## Taller de Programación 2
Examen Final llamado Julio (2 de diciembre, 2024)

Enunciado: Sistema de Gestión de Inventarios

Se busca desarrollar un sistema, con persistencia en la memoria del servidor, que administre los productos y ventas de una tienda especializada en juegos de mesa, permitiendo llevar un control del inventario y reportar estadísticas de ventas.
Los requerimientos son:

1. Implementar endpoints de administración:
   a. Registrar un juego con los siguientes datos: id (autogenerado por el servidor e irrepetible), nombre, categoría (estrategia, rol, cartas, familiar, etc), precio, cantidad en stock. 
      ***Realizar las validaciones necesarias!
   
En caso de NO cumplir con los valores estipulados para cada campo se debe retornar un mensaje. Ejemplo : “Los datos ingresados no son válidos”, caso contrario retornar el objeto correspondiente.

   b. Registrar una venta con los siguientes datos: id del juego, cantidad vendida.

   c. Listar el inventario completo con todos los juegos.

3. Crear endpoints para estadísticas:
   a. Total de unidades vendidas en número de todos los juegos.
   b. Total de unidades vendidas por categoría. La respuesta deberá tener por ejemplo, el siguiente formato:
{
unidadesVendidas: {
    { estrategia: 12 },
    { rol: 5 },
    { cartas: 9 }
}
}

El servidor recibirá y responderá desde y hacia el frontend con los datos requeridos en formato JSON. En caso de inconvenientes, el servidor responderá con un objeto con un campo ‘errorMsg’ informando el motivo de la falla. Todas las respuestas deberán estar correctamente adosadas con su código de estado correspondiente, según el resultado de la operación. En el caso de realizar notificaciones, modularizar adecuadamente. La notificación en sí puede simularse con un mensaje por terminal.
Aclaraciones sobre el desarrollo esperado:
1. El proyecto debe incluir únicamente el backend del sistema, utilizando Node.js + express. El formato del servidor es de tipo RESTful. Tener en cuenta los lineamientos de dicho formato, especialmente a la hora de elegir los nombres de las rutas de acceso al sistema, los verbos que accionan sobre ellas, y cómo pasar datos adicionales a la consulta.
2. El sistema debe estar correctamente separado en capas y componentes, y esta separación debe estar claramente puesta de manifiesto en la estructura de carpetas y archivos. Entre los componentes que esperamos que estén presentes encontramos: router/controlador, casos de uso, modelo/s, DAO/s, repositorios, servicios de terceros, factories, commands (los que correspondan de acuerdo al sistema modelado y se hayan visto en cursada).
3. La validación de datos es una parte importante del negocio, por lo tanto, observar cómo y dónde realizarla.
4. No es necesario utilizar una conexión a base de datos real; es posible persistir en el DAO/Repositorio usando memoria del servidor.
5. Recordar el rol de las factories, que nos permiten desacoplar las dependencias de nuestros componentes a la hora necesitar una instancia de los mismos. Recordar esto especialmente a la hora de decidir cómo obtener los casos de uso para invocarlos desde la capa de ruteo.
6. Pueden reutilizar código de proyectos realizados durante el cuatrimestre, siempre y cuando el código se utilice y realmente aporte al desarrollo de las funcionalidades pedidas. La inclusión de código innecesario o fuera de lugar será penalizada.



