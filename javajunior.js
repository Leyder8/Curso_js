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



// _>--DOM(Document Object Mode)--<_

    // Es una API que con las herramientas necesarias que nos permite representar un
    // documento "HTML", "XML" y "XHTML".

        //____ Nodo ____//

        // Es cualquier etiqueta del cuerpo, como un parrafo, el mismo "body", o incluso
        // las etiquetas de una lista.

             // >> Tipo de nodo "Document" type(9) <<
                // Es el nodo raíz a partir del cual se derivan el resto de nodos. Todos
                // los nodos derivan del document.

            // >> Tipo de nodo "Element" type(1) <<
                // Son nodos definidos por etiquetas "HTML", como por ejemplo un "h1", "P", "div", etc.

            // >> Tipo de nodo "Text" type(3) <<
                //Es el texto dentro de un nodo "Element", se considera un nuevo nodo hijo
                // de tipo text (Text).
                
            // >> Tipo de nodo "Attribute" type(2) <<
                // Los atributos de las etiquetas como; type, src, etc definen nodos, (en JavaScript
                // no los veremos como nodos, sino como función asociada al nodo de tipo element).

            // >> Tipo de nodo "Comentarios y otros" type(8) <<
                // Los comentarios como y otros elementos como las declaraciones doctype en
                // cabecera de los documentos HTML generan nodos.

        //____ Metodos de selección de elementos ____//

            // >> getElementById() <<
                    // Selecciona por elemento id, traemos al documento JavaScript un id del HTML.

                    Document.getElementById("parrafo");// En los parentesis va el nombre que le dimos en el HTML.

            // >> getElementByTageName() <<
                    // Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
                    // Basicamente traemos etiquetas tal cual como las ecribimos en el HTML, p, div, h1, etc.
                    
                    Document.getElementByTaName("p");// En los parentesis va la etiqueta que está en el HTML.
            
            // >> querySelector() <<
                    // Con este selector podemos llamar a "clases" y "id" del HTML.

                    Document.querySelector(".parrafo");// En los parentesis va la "clases"(.) o "id"(#).

            // >> querySelectorAll() <<
                    // Su función es igual a la de "querySelector", pero a diferencia de esta, lo que hace es
                    // selecionar todos los elementos que tengan la "calse" o "id" que estamos llamando e
                    // internamente nos va a formar una lista con esos elementos.

                    Document.querySelectorAll(".parrafo");// En los parentesis va la "clases"(.) o "id"(#).



        //____ Definir para definir, obtener y eliminar valores de atributos ____// -element.-
        
            // >> setAttribute() <<
                    // Modifica el valor de un atributo.

                    const rango = document.querySelector(".rango");
                    valorRango = rango.setAttribute("type","number"); //En los parentesis ve primera el atributo"type", y después al valor que lo queremos modificar.
            
            // >> getAttribute() <<
                    // Obtiene el valor de un atributo.

                    const rango1 = document.querySelector(".rango");
                    valorRango1 = rango1.getAttribute("type"); // Lo que hará será decirnos en pantalla el valor que tiene el atributo
            
            // >> removeAttribute() <<
                    // Remueve el valor de un atributo.

                    const rango2 = document.querySelector(".rango");
                    valorRango2 = rango2.removeAttribute("type",""); //Si al final ponemos comillas llamando al valor, nos mostrará en consola que existe "type", pero si solo ponemos "type" no nos mostraría nada.



        //____ Atributos globales ____//

        // Funciona como opcciones de "setAttribute" para modificar el contenido que teniamos en el HTML.

            // >> contentEditable <<
                    // Lo que hace es dar la opción al usuario de poder editar el texto al cual le
                    // hemos adjuntado este modificador.

                    const titulo = document.querySelector("titulo");
                    titulo.setAttribute("contentEditable","true");

            // >> dir <<
                    // Con esto indicamos la direccioón del texto, si queremos que sea de DER a IZQ(rtl)
                    // o de IZQ a DER(ltr).

                    const titulo = document.querySelector("titulo");
                    titulo.setAttribute("dir","rtl");

            // >> hidden <<
                    // Lo que hace es ocultarnos o mostrarnos un elemento, nos lo muestra esi en el HTML
                    // ya le habíamos puesto "hidden", de lo contrario nos lo ocultará.

                    const titulo = document.querySelector("titulo");
                    titulo.setAttribute("hidden","true"); // Para activarlo hay que acompañarlo de un valor boleano.

            // >> tabindex <<
                    // Indica si el elemento puede obtener focus de input.

                    const titulo = document.querySelector("titulo");
                    titulo.setAttribute("tabindex","0"); // Para activarlo hay que acompañarlo de un valor numerico.

            // >> title <<
                    // Nos mostrará una pequeña información cuando coloquemos el cursor sobre un cierto elemento.

                    const titulo = document.querySelector("titulo");
                    titulo.setAttribute("title","este es un titulo");

            // NOTA -->   Estos son solo algunos atributos globales, de estos existen cantidades.
                        // También son atributos que podemos manejar dentro de las etiqueta    s en el HTML.



        //____ Atributos de Inputs ____//

            // >> className <<
                    // Lo que hace es mostrarnos el nombre de la clase que le dimos al input.

                    const input = document.querySelector(".input-normal");
                    document.write(input.className);

            // >> value <<
                    // Lo que hace es mostrarnos los valores de "value" que le dimos al input.

                    const input = document.querySelector(".input-normal");
                    document.write(input.value);
            // >> type <<
                    // Lo que hace es mostrarnos los valores de "type" que le dimos al input,
                    // también podemos modificar el "type" desde JavaScript.

                    const input = document.querySelector(".input-normal");
                    input.type = "text";

            // >> accept <<
                    // Funciona para mostrar el botón de "seleccionar archivo", pero para esto
                    // el "type" del HTML de tener el valor "file", y ya en el JavaScript le
                    // decimos que queremos que el boton acepte.

                    const input = document.querySelector(".input-normal");
                    input.accept = "iamge/png";

            // >> form <<
                    // Este atributo solamente va en el HTML, y es para poder enlazar un input
                    // que esta fuera del formulario, ya que si no está dentro del "form" el
                    // botón "submit" no tendría nada que enviar, entonces lo que hacemos es
                    // poner dentro del input "submit" el código form="id del formulario".

                    HTML - ejemplo;
                    // <form id="formulario">
                    //     <input type="text" name="">
                    // </form>
                    // <input type="submit" form="formulario">

            // >> minlength <<
                    // Sirve para designarle a un imput la cantida de caracteres debe tener para
                    // poder enviar la info, si no cumple con la natidad de caracteres no enviará
                    // la información y nos mostrará un pestaña diciendonos la cantidad de
                    // caracteres requeridos.
                    // este atributo también lo podemos poner directamente en el html dentro del input.

                    const input = document.querySelector(".input-normal");
                    input.minLength = 5;

            // >> placeholder <<
                    // Lo que hace es mostrarnos dentro del input un breve valor que podemos dejar 
                    // como mensaje o guía para el usuario.
                    // También lo podemos poner dentro del HTML.

                    const input = document.querySelector(".input-normal");
                    input.placeholder = "Nombre";

            // >> required <<
                    // Cumple la función de no dejar enviar los datos si uno de los inputs al que le
                    // hayamos dado este tributo no tenga ningún dato escrito dentro de él, y al
                    // igual que "minLength" nos mostrará una pestaña de que se debe llenar el campo.

                    const input = document.querySelector(".input-normal");
                    input.required = "true";

            // >> Atributo style <<
                    // Es poder cambiar propiedades CSS dentro del JavaScript.
                    // element.

                    const titulo = document.querySelector(".titulo");
                    titulo.style.color = "#a22";



        //____ Clases, classList y métodos de classList ____//

            // >> add() <<
                    // Lo que hace es añadirnos una nueva clase como si fuera casi un complemento
                    // para una clase ya creada en HTML.
                    // Nosostros ya tenemos en HTML una etiqueta con una clase definida, pero
                    // en JavaScript podemos crear otra clase que podemos cambiar su esrilo
                    // en CSS como una etiqueta normal, y además agregarle esas caracteristicas
                    // a la etiqueta al cual nos estamos refiriendo en JavaScript.

                    const titulo = document.querySelector(".titulo"); //Clase del HTML
                    titulo.classList.add("grande"); //Nueva clase, esta clase se puede tratar en css como una clase normal.

            // >> remove() <<
                    // Lo que hace es remover una clase. Hay que tener en cuenta que en HTML se
                    // pueden poner dos clases a una misma etiqueta, y esto se hace solamente dejando
                    // espacio entre ellas. Tenemos ya las dos clases y a cada una le dimos valores
                    // diferentes en CSS, aquí es donde podemos remover una de las etiquetas afectando
                    // así al resultado.

                    const titulo = document.querySelector(".titulo");
                    titulo.classList.remove("grande");

            // >> item() <<
                    // Devuelve la clase del índice especificado. Si tenemos varias clases dentro de 
                    // una misma etiqueta del HTML, podemos llamarlas y que se muestren en pantalla,
                    // esta es básicamento la función de "item". Se debe tener en cuenta que para
                    // llamar a una de las clases se llamas por su posición, y al igual que los arrays
                    // las clases empiezan con la posición "cero 0".

                    const titulo = document.querySelector(".titulo");
                    let valor = titulo.classList.titem(2);
                    document.write(valor);

            // >> contains() <<
                    // Lo que hace es decirnos si existe una clase que nosotros le preguntemos, dentro
                    // de la etiqueta a la que nos estamos refiriendo, el resultado sin bucle será boleano.

                    const titulo = document.querySelector(".titulo");
                    let valor = titulo.classList.contains("grande"); //Clase que estamos consultando

                    if (valor) {
                        document.write("La clase existe");
                    }
                    else {
                        document.write("La clase no existe");
                    }
            // >> replace() <<
                    // Lo que hace es remplazar una clase por otra. La primera es la clase que se pregunta si 
                    // existe, y de ser así, la sengunda sería con la que se remplazaría.

                    const titulo = document.querySelector(".titulo");
                    let valor = titulo.classList.replace("grande","pequeño");

            // >> toggle() <<
                    // Lo que hacemos es consultar si en la etiqueta se encuentra una dicha clase, y si
                    // la clse no existe la va a agregar, y si la clase si existe lo que hará será removerla.
                    // también hay un segundo parametro que es donde ponemos "true" para siempre agrgarla,
                    // o "false" para siempre quitrla.

                    const titulo = document.querySelector(".titulo");
                    let valor = titulo.classList.toggle("grande","true");



        //____ Obtención y modificación de elementos ____//

            // >> textContent <<
                    // Lo  que hace es mostrarnos el texto que hay dentro de la etiqueta del HTML,
                    // esto nos muestra el texto, pero no las características como lo puede las de un <b></b>.
                    // También si a <b></b> le decimos que no se muestre "hidden", igualmente nos lo va a mostrar.

                    const titulo = document.querySelector(".titulo");
                    let resultado = titulo.textContent;
                    document.write(resultado);

            // >> innerText <<(No estandar)
            // fue crado debido a "intenet explorer" pero no se utiliza.
                    // Funciona igual que "textContent", pero a diferencia de este, si a <b></b> le damos
                    // que nos se muestre el "innerText" no nos lo va a mostrar.

            // >> outerText <<
                    // Existe pero ya no se usa.

            // >> inerHTML <<
                    // A diferencia de "textContent" si nos muestra las caracteristicas como las de un <b></b>,
                    // pero no es capas de mostrarnos nada si al <b></b> le damos que no se muestre.
                    // Eso afecta para la interpretación el navegador, pero si lo mostramos en un "alert"
                    // nos mostrará todo el contenido de la etiqueta y además nos mostrará la parte del código
                    // <b></b> incluso mostrandonos el "hidden" en código, si se lo dimos en el HTML.

                    const titulo = document.querySelector(".titulo");
                    let resultado = titulo.innerHTML;
                    alert(resultado);
                    
            // >> outerHTML <<
                    // Su función e interpretación es como la de "inerHTML", pero a diferencia de este lo que hace
                    // es mostrarnos el código desde la etiqueta contenedora y no solo a una etiqueta que pueda ser
                    // afectada para no mostrarse como en los ejemplos anteriores. En pocas palabras "inerHTML"
                    // te muestra contenido y código afectado, y "outerHTML" te muestra todo en código. También
                    // funciona en un "alert".

        //____ Creación de elementos ____//

                // >> createElement() <<
                    // Su función es crear un nuevo elemento, por ejemplo crear una etiqueta <li></li>
                    // dentro de la etiqueta a la que nos referimos en la clase.
                    // . El nombre del nuevo elemento lo vamos a escribir en mayúscula.

                    const contenedor = document.querySelector(".contenedor");
                    const item = document.createElement("LI"); //Va en mayúscula
                    console.log(item);

                // >> createTextNode() <<
                    // Es muy similar a "createElement" pero a diferencia de este no crea un
                    // nuevo elemento(etiqueta), sino que crea un nodo de texto(el contenido
                    // de "texto" dentro de la etiqueta).

                    const contenedor = document.querySelector(".contenedor");
                    const textDelItem = document.createTextNode("Este es un item de la lista");
                    console.log(textDelItem);

                // >> apenndChild() <<
                    // Nos da la función de que podamos agregar el "createTextNode" dentro del
                    // "createElement".
                    
                    const contenedor = document.querySelector(".contenedor");
                    const item = document.createElement("LI");
                    const textDelItem = document.createTextNode("Este es un item de la lista");

                    item.appendChild(textDelItem);
                    // También se pede poner dentro del contenedor:
                    contenedor.appendChild(item);
                    // También podemos agregarlo como texto:
                    item.innerHTML("Este es un item de la lista");

                // >> createDocumentFragment() <<
                    // Su función es poder agregar varios "createElement" con sus respectivos
                    // "createTextNode" sin consumir demasiados recursos.

                    const contenedor = document.querySelector(".contenedor");
                    const fragmento = document.createDocumentFragment();

                    for(i = 0; i < 20; i++){
                        const item = document.createElement("LI");
                        item.innerHTML("Este es un item de la lista");
                        fragmento.appendChild(item);
                    }
                    contenedor.appendChild(fragmento);



        //____ Obtención y modificación de childs ____//

                // >> firstChild <<
                    // Nos permitirá mostrar únicamente el primer elemento hijo de un elemento
                    // padre, esto si hay varios hijos. Hay que teneer en cuenta que no deben
                    // haber espacios ni un "enter" entre el elemento hijo y el padre, ya que eso
                    // será contado como texto y será eso lo que nos mostrará.

                    const contenedor = document.querySelector(".contenedor");
                    const primerHijo = contenedor.firstChild;
                    console.log(primerHijo);

                // >> lastChild <<
                    // Funciona igual que "firstChild" con todos sus parametros, la única 
                    // es que nos muestra es el último elemento hijo del padre. 

                // >> firstElementChild <<
                    // Nos soluciona el problema que tenemos en "firstChild" y "lastChild" de 
                    // del espacio o en "enter" entre el padre y el hijo, con "firstElementChild"
                    // ya podemos diagrmar correctamente en HTML y que nos muestro el primer 
                    // elemento hijo.

                // >> lastElementChild <<
                    // Funciona tal cual que "firstElementChild", pero lo que hace es mostrarnos
                    // el último elemento hijo.

                // >> firstNodes <<
                    // Lo que hace es mostrarnos en un Nodelist todos los elementos dentro de
                    // un elemento padre. No es un array.

                    const contenedor = document.querySelector(".contenedor");
                    const hijos = contenedor.childNodes;
                    console.log(hijos);
                    // También lo podemos mostrar con un "forEach"
                    hijos.forEach(hijo => console.log(hijo));

                // >> children <<
                    // Nos mostrará los elementos hijos de un padre pero solamente nos mostrará
                    // el código más no el contenido de los hijos.
                    // No se puede recorrer con un "forEach" pero si con un "for of".

                    const contenedor = document.querySelector(".contenedor");
                    const hijos = contenedor.children;

                    console.log(hijos);
                    // o con "for of":
                    for( hijo of hijos){
                            console.log(hijo);
                    }



        //____ Métodos childs ____//

                // >> replaceChild <<
                    // Lo que hacemos es remplazar un element hijo del HTML por un nuevo 
                    // elemento hijo creado en JavaScript.

                    const contenedor = document.querySelector(".contenedor");
                    const h2_nuevo = document.createElement("H2");
                    h2_nuevo.innerHTML = "Titulo";

                    const h2_antiguo = document.querySelector(".h2");
                    contenedor.replaceChild(h2_nuevo, h2_vijeo) //Primero va el elemento con el que vamos a remplazar y después en antiguo.

                // >> removeChild <<
                    // Lo que hace es remover un elemento hijo.

                    const contenedor = document.querySelector(".contenedor");
                    const h2_nuevo = document.createElement("H2");

                    const h2_antiguo = document.querySelector(".h2");
                    contenedor.removeChild(h2_antiguo);

                // >> hasChildNodes <<
                    // Lo que hace es verificarnos si un elemento tiene hijos.

                    const contenedor = document.querySelector(".contenedor");
                    const h2_nuevo = document.createElement("H2");

                    const h2_antiguo = document.querySelector(".h2");

                    let respuesta = contenedor.hasChildNodes();

                    if(respuesta) {
                            document.write("El elemento tiene hijos");
                    } else {
                            document.write("El elemento NO tiene hijos");
                    }

        //____ Propiedades de parents ____//
                // Hay varias pero las más comúnes son las siguientes:

                // >> parentElement <<
                    // Lo que hace es decirnos cuál es el elemento padre del elemento que
                    // estemos preguntando. Busca etiqueta HTML padre.

                    const contenedor = document.querySelector(".contenedor");
                    const h2_nuevo = document.createElement("H2");

                    const h2_antiguo = document.querySelector(".h2");

                    console.log(h2_antiguo.parentElement);

                // >> parentNode <<
                    // Funciona similar similar a "parentElement", pero el parentNode es
                    // más que todo para casos especificos. Busca un nodo padre.



        //____ Propiedades de siblings (hermanos) ____//

                // >> nextSibling <<
                    // Nos muestra el elemento hermano siguiente del elemento al que nos
                    // estamos referenciando, solo que si dejamos un espacio o un "enter"
                    // entre elementos hermanos eso nos lo va a contar y será lo que nos mostrará.
                    
                    const contenedor = document.querySelector(".contenedor");
                    const h2_nuevo = document.createElement("H2");

                    const h2_antiguo = document.querySelector(".h2");

                    console.log(h2_antiguo.nextSubling);

                // >> previousSibling <<
                    // Funciona igual que "nextSubling", pero lo que hace es mostrarnos el
                    // elemento previo al elemento al que nos estamos referenciando.
                    // También lo afecta los espacios y los "enter" entre elementos hermanos.

                // >> nextElementSibling <<
                    // Funciona igual que "nextSibling" pero con este no afectan los espacios
                    // o los "enter" entre los elementos hermanos.

                // >> previousElementSibling <<
                    // Funciona igual que "previousSibling" pero con este no afectan los espacios
                    // o los "enter" entre los elementos hermanos.

                // >> closest() <<
                    // Lo que hacemos es mostrarnos el elemento hacendente del elemento  al que 
                    // nos estamos referenciando, y al mismo tiempo que contenga la clase que
                    // nosotros le estamos preguntando. esto es aplicado de elementos hijos donde su
                    // elemento acendente va a ser el elemento padre.

                    const div = document.querySelector(".div-3");

                    console.log(div.closest(".div")); // En los parentesis pondremos la etiqueta que debe tener el elemento hacenedenete más cernano al elemento hijo.







