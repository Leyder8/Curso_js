// _>--CONSOLE--<_

    //____ Funciones de registro____//

        // >> assert() << -"NO ESTANDAR"-
            // Aparece un mensaje de error en la consola 
            // si la afirmación es falsa, si la afirmación  
            // es verdadera no aparecerá nada,  de lo 
            // contrario nos aparecerá un error.

            console.assert( 5 < 6);

        // >> clear() <<
            // Lo que hace es limpiar la consola.
            // Se puede poner directamente en la consola.

            console.clear();

        // >> error() <<
            // Muestra un mensaje de error en la consola web.

            console.error("¿Qué hiciste?"); //"Qué hiciste" se mostrará con la consola como error.

        // >> info() <<
            // Emite un mensaje informatico en la consola,
            // es muy diferente a "log" debido a que este mismo
            // es un mensaje de depuración.

            console.info("¿Cómo estás?");

        // >> table <<
            // Lo que hace es crearnos una tabla con los
            // valores que le dimos en código, funciona
            // unicamente si trabajamos con una array o un objeto.

            console.table([1,2,3,4,5]); //La info tiene que estar dentro de un array.

        // >> warn() <<
            // Nos muestra un mensaje de advertencia
            // dentro de la consola.

            console.warn("vas bien pero, ten cuidado por que...");

        // >> dir() << -"NO ESTANDAR"-
            // Nos despliega una lista interactiva con los
            // valore asignados al objeto al que nos
            // estamos refiriendo. Es similar a "info" en
            // como nos manda el resultado, pero cada uno
            // nos muestra el resultado de forma distinta.
            
            console.dir([1,2,3,4,5,6]);


    //____ Funciones de conteo____//

        // >> count() <<
            // Lo que hace es mostrarnos las cantidades de
            // veces que hemos ejecutado esta misma función.
            // Por ejemplo si esto lo ejecutamos 10 veces,
            // en la consola nos aparecera 10 ejecuciones en
            // orden cronológico del 1 al 10.

            function suma(suma1,suma2){
                document.write(suma1,suma2);
                console.count();
            }

            suma(2,4)
            suma(2,4)
            suma(2,4)
            suma(2,4) //Se ejecutará 4 veces.

        // >> countReset() <<
            // Funciona en conjunto con "count", y basicamente
            // su función es resetaer el conteo hasta donde se
            // ejecutó la función anteriormente y desde ahí poder
            // empezar otro conteo.

            function suma(suma1,suma2){
                document.write(suma1,suma2);
                console.count();
            }

            suma(2,4)
            suma(2,4)

            console.countReset() // Después de aquí se ejecutará un nuevo conteo.
            suma(2,4)
            suma(2,4)

    //____ Funciones de agrupación____//

            // >> group() <<
                // Lo que hacemos con esta función es poder crear
                // grupos dentro de la consola, y dentro de este 
                // grupo podemos agragar más grupos con este mismo
                // código. Dentro de los parentesis ponemos ponemos
                // como se llamaría el grupo. Es importante aclarar
                // que el codigo debe ir escrito directamente en la
                // consola.

                console.group("grupo 1")

            // >> groupEnd() <<
                // Funciona en conjunto con "group", y lo que hace
                // es eliminar un grupo que esté dentro de otro grupo,
                // o cerrar el grupo contenedor agregandoselo al
                // final de ese grupo.

                console.groupEnd()

            // >> groupCollapsed() <<
                // Funciona similar a "group", pero a diferencia de este,
                // lo que hace es mostrarnos de una vez el grupo de forma
                // cerrado. Aqué también pomos utilizar el "groupEnd".

                console.groupCollapsed("grupo2")

            // >> time() <<
                // Cumple la función de ser una temporizador y mostrarnos
                // cuanto tiempo se ha demorado en ejecutarse una función,
                // trabaja en conjunto con otras dos funciones que son las
                // siguientes:

            // >> timeLog() <<
                // Cada vez que coloquemos este código nos dirá cuanto
                // tiempo ha transcurrido hasta el momento donde lo
                // hayamos puesto.

            // >> timeEnd() <<
                // Lo que hace es finalizar el temporizador, y también
                // de la misma forma que "timeLog" nos mostrará cuánto
                // tiempo ha transcurrido hasta ese momento.

                // Toda la info del temporizador de mostrará en la consola.

                console.time()

                function sumar(sumar1,sumar2){
                    document.write(sumar1,sumar2);
                    console.timeLog()
                }

                sumar(2,4)
                sumar(2,4)

                console.timeEnd() 

            // >> Modificar estilo de texto <<
                // Es un concepto con el que podemos modificar algunas
                // propiedades de un elemento dentro de la consola.
                // Se trabaja con código CSS, y para ejecutarlo se 
                // debe poner primeramente un "%c" pegado al elemento,
                // y ya después escribir en otra cadena el código CSS.

                console.log("%crancio","color:red;background:blue;")