    //____ Window ____//

        // >> open() <<
            // Lo que hace es abrir y dirigir el usuario a una nueva ventana que que
            // que nosotros designemos.
            
            let youtuebeURL = "https://youtube.com";
            let ventana = window.open(youtuebeURL);

        // >> close() <<
            // Lo qu hace es dar la orden de que se cierre una ventana, lo podemos
            // poner el código para alguna función o lo podemos poner en consola.

            let youtuebeURL = "https://youtube.com";
            let ventana = window.open(youtuebeURL);

            ventana.close();

        // >> close() <<
            // Lo que hacemos es preguntar si la ventana que abrimos anteriormente
            // con "open" está cerrada o no, y dependiendo de las respuesta nos devolverá
            // un valor boleano. Por lo general se escribe en la consola.

            vantana.closed // "ventana" es en relación en los ejemplos anteriores.

        // >> stop() <<
            // Lo que hace es detener el estado de carga de una página. Se puede escribir
            // en consola.

            window.stop

        // >> print() <<
            // Lo que hace es mandar al usuario una ventena para ejecutar una impresión.

            print();

        // >> confirm() <<
            // Es para confirmar una acción que haya hecho el usuario, como por ejemplo:
            // cerrar una ventana, guardar cambios, etc. Y dependiendo de su respuesta
            // después de la confirmación, podemos ver en consola en resltados boleanos
            // si el usuario dio si o no.

            respuesta = confirm("¿Estás seguro que quieres cerrar la ventana?");

            console.log(respuesta);

        // >> screen() <<
            // Nos muestra las propiedades del "screen" que las podremos encontrar en consola.

            const screen = window.screen;

            console.log(screen);
            document.write(screen);

        // >> screenLeft << Propiedad de lectura
            // Lo que hace es decirnos cuánta distancia hay entre el borde lateral IZQ de 
            // el navegador y el borde lateral IZQ de la pantalla del computador.

        // >> screenLeft << Propiedad de lectura
            // Lo que hace es decirnos cuánta distancia hay entre el borde superior de 
            // el navegador y el borde superior de la pantalla del computador.

            Ejemplo de "screenLeft" y "screenTop"

            const screenLeft = window.screenLeft;
            const screenTop = window.screenTop;

            document.write(`
                Left: ${screenLeft}
                Top: ${screenTop}`
            );

        // >> scrollX <<
            // Devuelve el número de píxeles que el documento se desplazó mediante scroll en
            // el ejeX.

        // >> scrollY <<
            // Devuelve el número de píxeles que el documento se desplazó mediante scroll en
            // el ejeY.

            Ejemplo de "scrollX" y "scrollY"

            const scrollX = window.scrollX;
            const scrollY = window.scrollY;

            alert("X:" scrollX + " Y:" + scrollY);

        // >> scroll() <<
            // Lo que hace es desplazar la ventana mediante valores dados por nosotros mismos.
            // Se puede probar en consola.

            window.scroll(0,100) //Dentro de los parentasis van los valores que queremos que se desplacen en el eje X y el eje Y.

        // >> scrollTo() <<
            // Es similar al "scroll".

        // >> resizeBy() << En servidor
            // Cambia el tamaño de la ventana actual en una cantidad especifica. No es relativo.

            ventana.resizeBy(100,200); //En los parentesis van los datos del ejeX y el ejeY

        // >> resizeTo() << En servidor
            // Redimensiona dnamicamente la ventana. Es relativo.

            ventana.resizeTo(100,200); //En los parentesis van los datos del ejeX y el ejeY.
                    // Ó
            vwindow.resizeTo(100,200);

        // >> moveBy() << En servidor
            // Mueve la ventana en una uubicación relativa.

            ventana.moveBy(100,200); //En los parentesis van los datos del ejeX y el ejeY.

        // >> moveTo() << En servidor
            // Mueve la ventana en una uubicación relativa.

            ventana.moveTo(100,200); //En los parentesis van los datos del ejeX y el ejeY.

// Nota: Ver "objetos barprop" min: 28:35 del curso.



    //____ Window location____//

        // >> window.location.href <<
            // Lo que hace es es mostrarnos donde está alojado nuestro documneto HTML,
            // si la página ya se encuentra en la web entonces nos mostrará la URL de 
            // la ventana que tenemos abierta en ese momento.

            window.location.href

        // >> window.location.hostname <<
            // Nos muestra el dominio del sitio web en el que estamos, incluyendo el 
            // subdoominio(www.). Si tomamos de ejemplo a YouTube nos mostraría www.youtube.com.
            
            window.location.hostname

        // >> window.location.pathname <<
            // Nos muestra la ruta y el nombre de archivo de la página donde estemos situados

            window.location.pathname

        // >> window.location.protocol <<
            // Nos muestra el protocolo de la página, si es una sitio seguro nos mostrará
            // "https" y si no es seguro "http".

            window.location.protocol

        // >> window.location.assing() <<
            // Nos carga un nuevo documento. Entre los parentesis pondremos la ruta de la
            // página a la que queeremos ir.

            window.location.assign("https://youtube.com");



    //____ Errwmientas de desarrollo del navegador(debugging)____//

        // >> Pesataña elements <<

            - Filtros y buscar por palabras claves.
            - Modificar, crear y eliminar etiquetas.
            - Modificar propiedades de CSS.
            - Event listeners.
            - Properties.
            - Opciones para copiar.
            - Seguir explorando.

            // Atejo para buscar por palabras en la herramienta de Google "ctrl" + (F).

        // >> Pesataña resources <<

            - Ver y guardar archivos.
            - Información afrecida.
            - Cambios en tiempo real.
            - Snnipets:
                * Ejecutar código por fragmentos. 

        // >> Pesataña networks <<

            - Interfaz. 
            - Sort BY y filtros de busqueda. 
            - Limpiar cookies y caché. 
            - Importar y exportar. 

        // >> Pesataña timeline/performance <<

            - Uso y grbación.
            - Screenshots de la grbación. 
            - Controls. 

            - Overview:
                * FPS, GPU y Net. 

            - Flame Chart. 
            - Details. 
            
            - Sugerencias de grabación:
                * Grebaciones cortas
                * Evitar acciones innecesarias
                * Inhabilitar el caché del navegador.
                * Inhabilita las extenciones.



    //____ Eventos ___// No recomendable actaulmente

        // >> Eventos o "Event Handlers" <<

            // Los eventos deben ser asociados a un código. Manejador de eventos para asociar el
            // código a los eventos(on), acompañado del nombre del evento por ejeplo "onclick",
            // el manejador y y el nombre del evento formarían un nombre propio, sic camelCase. 
            // Esta forma de asociar eventos no es recomendable actualmente, debido que si no se
            // ejecuta por alguna razón el JavaScript en el DOM, el evento no se va a ejecutar.

            const button = document.querySelector(".button");

            button.onclick = ()=>{
                alert("Hola");
            }

        // >> Escucha de eventos o "Event Listeners" <<

            // En la escucha de evento no se puede ejecutar con funciones flechas, solamente
            // con funciones normales. Y de igual manera no acepta paramentros. 

            const button = document.querySelector(".button");

            button.addEventListener("click", saludar); // Entre commilas el nombre del evento y segido el nombre de la funcción.
            function saludar(){
                alert("Hola");
                button.removeEventListener("click", saludar);
            }
                // Simplificado:
                button.addEventListener("click",()=>{
                    alert("Hola");
                });
                // Si queremos remover un evento solo se puede con el nombre
                // de la función más no con el código en si, así que de
                // esta forma no funcionaría:
                button.addEventListener("click",()=>{
                    saludar();
                });

                function saludar(){
                    alert("Hola");
                    button.removeEventListener("click", ()=>{
                        saludar()
                    });
                }
                // No admite parametros como el siguiente:

                button.addEventListener("click", saludar(Pedro));
                function saludar(a){
                alert(a);

        // >> Objeto evento <<

            // Lo que hace es mostrarnos qué evento se está ejecutando. Es el evento que se ejecunta
            // y todas sus propiedades.

                const button = document.querySelector(".button");
                
                button.addEventListener("clink",(e)=>{
                    console.log(e);
                })
            // Si queremos mostrar el objeto que desencadeno todo el evento:

            const button = document.querySelector(".button");
                
            button.addEventListener("clink",(e)=>{
                console.log(e.target);
            })

        // >> Flujo de eventos o "Event flow" <<

            // Es el orden con el que van a ejecutar los eventos. Existen dos tipos de orden:
            // "Event Bubbling" y "Event Capturing".

            // >> Event Bubbling <<
                // Es el orden por defecto, ejecunta preimero el más especifico(elementos hijos),
                // y luego al menos especifico(padre).

            // >> Event Capturing <<
                // Con este orden podemos orgaizar los eventos para que se ejecuten en el orden
                // que nosostros definamos, diferente a como lo hace "Event Bubbling".

            // >> Event stopPropagation() <<
                // Con esto detenemos la continuidad de la ejecución de los eventos, esto
                // va de acuerdo al evento que se lo pongamos, después de ese evento al que
                // se lo hayamos puesto, no se van a seguir ejecutando más eventos. 

                const button = document.querySelector(".button");
                const contenedor = document.querySelector(".contenedor");
                const contenedor2 = document.querySelector(".contenedor2");

                button.addEventListener("click",(e)=>{
                    alert("di click en el botón");
                    e.stopPropagation(); // Ponemos el nombre del evento seguido de "stopPropagation()"
                })

                contenedor.addEventListener("click",(e)=>{
                    alert("di click en el contenedor");
                })

                contenedor2.addEventListener("click",(e)=>{
                    alert("di click en el contenedor2");
                }true) // Event Bubbling

                

    //____ Eventos de mouse____//

        // >> Click <<
            // Ocurre con un click, cuando se le da click el evento ocurre.

        // >> doble click "dblclick" <<
            // Ocurre con un doble click, cuando se le da docle click el evento ocurre.

            const contenedor = document.querySelector(".contenedor");

            contenedor.addEventListener("dblclick",(e)=>{ // Se pone en el nombre del evento.
                alert("di click en el contenedor");
            })

        // >> mouseover <<
            // Ocurre cuando el puntero del mouse se mueve sobre un elemento o sobre uno de
            // sus hijos. 

            Se digita igual que el ejemplo anterior.

        // >> mouseout <<
            // Ocurre cuando el puntero del mouse se mueve fuera de un elemennto, o de sus
            // elementos secuntarios.

            Se digita igual que el ejemplo anterior.

        // >> contextmenu <<
            // Ocurre con un click derecho sobre el elemento para abrir un menu contextual.

            Se digita igual que el ejemplo anterior.

        // >> mouseenter <<
            // Con un solo click al contenedor o a alguno de los hijos, la secuencia empezará
            // hasta finalizar todas las secuencias programadas. Más claramente como todo está
            // dentro del contenedor, entonces independiente si es un hijo o padre siempre se 
            // ejecutará debeido a que todos conforman un mismo contenedor.

            Se digita igual que el ejemplo anterior.

        // >> mousemove <<
            // Funciona similar que "mouseenter", pero a diferencia de este no me mostrá la
            // secuencia de todos los eventos, sino que siempre me mostrará el evento del 
            // elemento contenedor.

            Se digita igual que el ejemplo anterior.

        // >> mouseleave <<
            // El evento se ejecutará cada vez que el mause se mueva sobre el elemento, la única
            // forma en que no se ejecute es que el puntero esté quieto o esté fuera del elemento.

            Se digita igual que el ejemplo anterior.

        // >> mousedown <<
            // El evento se ejecutrá con solo hacer click, sin necesidad que soltar el click para
            // que esto ocurra.

            Se digita igual que el ejemplo anterior.

        // >> mouseup <<
            // Funciona igual que "mousedown" pero, en este caso el evento ocurre cuando se
            // suelta el click, hasta que no se suelte no ocurrirá nada.

            Se digita igual que el ejemplo anterior.



    //____ Eventos de teclado ____//

        // >> keydown <<
            // Ocurre cuando una tecla se deja de presionar.

        // >> keypress <<
            // Ocurre cuando una tecla se presiona y se suelta en un elemento.

        // >> keyup <<
            // Ocurre cuando una tecla es soltada.

            El siguiente ejemplo contiene a los tres eventos anteriores. 

            const input = document.querySelector(".input");

            input.addEventListener("keydown",(e)=>{
                console.log("Se presionó una tecla");
            })

            input.addEventListener("keypress",(e)=>{
                console.log("Se presionó y se soltó una tecla");
            })

            input.addEventListener("keyup", (e)=>{
                console.log("Se soltó una tecla");
            })

            // Ejemplo practico de "keyup"

            const input = document.querySelector(".input");
            const contenedor = document.querySelector(".contenedor");

            input.addEventListener("keyup", (e)=>{
                let tecla = e.key;
                let contenido = `La tecla que se oprimió es: <b>${tecla}</b>`;
                contenedor.innerHTML = contenido;
            })



    //____ Eventos de interfaz ____//

        // >> error <<
            // Este evento se da cuando la carga de un elemento multimedia es interrumpida
            // por alguna razón, evitando así cargarse completamente.

            const img = document.querySelector(".img");

            img.addEventListener("error",(e)=>{
                console.log("Ha sucedido un error");
            })

        // >> load <<
            // Ocurre cuando un elemento se ha cargado correctamente ppor completo.

            addEventListener("load",(e)=>{
                console.log("Se ha cargado correctamente");
            })

        // >> beforeunload <<
            // Ocurre antes de que el usuario Bndone el sitio, juasto antes de que el nuevo documento 
            // termine de cargase.

            addEventListener("beforeunload",(e)=>{
                console.log("Se ha cargado correctamente");
            })

        // >> unload <<
            // Ocurre destro del mismo caso que "beforeunload", pero este se ejecute cuando
            // el usuario y aha salido del sitio.

            Se digita igual que el ejemplo anterior.

        // >> resize <<
            // Ocurre cada vez que se altera el tamaño de la ventana del DOM.

            Se digita igual que el ejemplo anterior.

        // >> scroll <<
            // Ocurre cuando se desplaxa la barra de desplazamiento de un elemento.

            Se digita igual que el ejemplo anterior.

        // >> select <<
            // Ocurre cuando el usuario selecciona algún texto de un <input> o <textarea>.

            const input = document.querySelector(".input");
            const contenedor = document.querySelector(".contenedor");

            input.addEventListener("select",(e)=>{
                let start = e.terget.selectionStart;
                let end = e.terget.salectionEnd;
                let textoCompleto = input.value;
                contenedor.innerHTML = textoCompleto.substring(srtat.end);

            })

    //____ Temporizador ____//
        // Un teporizador da la posibilidad de poder ejecutar una función en una cantidad de
        // tiempo, hacer intervalos u otros usos que requiramos de acuerdo a lo que estemos
        // programando. Hay que saber manejar los temporizadores ya que consumen muchos recursos.
        // El tiempo se mide por milésimas de de segundo, osea que cada 1000 milisegundos 
        // son un segundo.

            // >> setTimeout <<
                // Cumple la función de ejecutar un evento después de que haya transcurrido
                // una sirta cantidad de tiempo qu enosotros le indiquemos.

                setTimeout(()=>{
                    document.write("Hola";)
                }2000); // De ultimo pondremos la cantidad de tiempo.

                // ó:

                const saludar = ()=>{
                    document.write("Hola");
                }

                setTimeout(saludar, 2000);

            // >> setInterval <<
                // Nos permite ejecutar una función cada cierta cacntidad de tiempo que nosotros
                // le asignemos.

                setInterval(()=>{
                    document.write("Hola";)
                }2000); // De ultimo pondremos la cantidad de tiempo.

            // >> clearTimeout <<
                // Tiene la función de eliminar el temporizador.

                const saludar = ()=>{
                    document.write("Hola");
                }

                setTimeout(saludar, 2000);
                clearTimeout(saludar);

            // >> clearIterval <<
                // Tiene la función de eliminar el temporizador intervalo.

                const intervalo = setIntervalo(()=>{
                    document.write("Hola");
                }2000);

                setTimeout(()=>{
                    clearInterval(intervalo);
                }5000)

    // >> preventDeault() <<
    // Previene e comportamiento por defecto.

    // <select></select> HTML.

    //____ Control de flujo y manejo de errores ____//

        // >> Sentencias de bloque <<
            // Por bloques {}
        // >> Sentencias de control de flujo <<
            // if, else if, if, etc.
        // >> Sentencias de manejo de excepciones <<
            // Más básicamente son los errores que se producen cuando ingresamos o 
            // recibimos un código excepción, bien sea algo que no esté dentro de la
            // sintaxis del lenguaje, o algo por el estilo. Para solucionar esto utilizamos
            // el "Try catch".

        //____ Try Catch ____//
            // Maneja los errores y las excepciones. A diferencia del "if else" el Try no puede
            // ejecuterse si no hay un Catch, en caso de que el Tray nos de un error, el Catch
            // tiene que estar si o si.
            // Nos permite manejar los errores y hacer que se efectue una acción si ocurre el error.
            // El error lo ponemos en el Try, y la acción que queremos que se ejecute va en el Catch.

            try{
                lakssh
            }

            catch(error){
                console.log("Hubo un error"); // Dentro de los parentesis del Catch podemos poner cualquier 
            }                                 // valor, pero siempre va contener los valores que ponemos en el "Try"

            // Hay dos tipos de Catch: el Catch incondicional, y el Catch condisional.
            // El Catch incondicional es cuando la acción que ponemos en el Catch es secilla, como
            // lo puede ser un ".log", un ".write", etc.
            // El Catch condicional es cuando ponemos una condición, como lo es "if", "if else", "else".

                //____ Finally ____//
                // Trabaja en conjunto con "Try" y "Catch", y cumple la función de que lo que hagamos
                // en "Finally" se va ejecutar haya o no un error. T iene prioridad por sobre todo.

                try{
                    lakssh
                }
        
                catch(error){
                    console.log("Hubo un error");
                } finally {
                    console.log("Igualmente se ejecuta");
                }

                //____ Sentencia Throw ____//
                // Es para tirar un error.

                try {
                    throw {
                        nombre:" Juan",
                        edad:" 20 años"
                    }
                }

                catch(pito) {
                    console.log(pito)
                }
            
            // Typeof: define el tipo de elemento que estamos utilizando, si es un string, un 
            // número, un objeto, etc.

            // Lo lo visto dentro del "try" y el "catch" anteriormente hay que saber que no  
            // es algo que se use constantemente, sino que es una herramienta que se debe 
            // utilizar en casos especificos y no se debe abusar de ella.

        //____ Sentencia Switch ____//
            // Cuando queremos que el código sea más legible, expresiones muy particulares, o 
            // analizar cosas muy complejas. Pero a nivel redimeinto es mucho mejor "if".

                // >> Sintaxis y sentencia case <<
                // >> Break <<
                // >> Default <<
                    

                    let expre = "manzana";

                    switch(expre){
                        case "banana":
                            console.log("Es una fruta amarilla.");
                            break;
                        case "pera":
                            console.log("Esta fruta es verde.");
                            break;
                        case "manzana":
                            console.log("Es de color rojo.");
                            break;
                        default:
                            alert("No es ninguna.");
                    }

                    // Con if:

                    if(expre == "banana"){
                        console.log("Es una fruta amarilla.");
                    }
                    else if(expre == "pera"){
                        console.log("Esta fruta es verde.");
                    }
                    else if(expre == "manzana"){
                        console.log("Es de color rojo.");
                    } else{
                        console.log("No es ninguna.");
                    }

    //____ Trabajar de manera obsoleta ____//

        //____ ¿Cuándo algo se vuelve obsoleto? ____//
        
            -"Deprecated"
            - Inutil.
            - No recomendado.
            - Con bugs o fallos.
            - Está por ser remplazado.
            - Hay mejores formas de hacerlo.

        //____ Los efectos negativos (aplicado a métodos, clases, propiedades) ____//

            - Uso excesivo de recursos.
            - Código con bugs o fallos.
            - Código inecesariamnente largo.
            - SEO.

        //____ ¿Cómo verificar si está obsoleto? ____//

            - 1 de cada 3 webs utiliza librerías de JavaScript obsoletas.
            - Verificar si tienen o usan funciones, métodos, objetos o metodologías obsoletas.
            - Vérificar en los sitios basados en estandares oficiales.

        //____ Detectar navegadores obsoletos ____//

            - Detección del navegador y cobertura de múltiples navegadores.





