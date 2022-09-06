let arrayTareas = [];

let divContadorTrue = "uno";
let divContadorfalse = "dos";

function imprimirHtml(nombreTarea) {
    //section3
    const section = document.getElementById("section-3");
    // div comtendor 
    const divContainer = document.createElement("div");
    divContainer.className = `${divContadorfalse}`
    //div contendor check y tarea 
    const divContainerTareaDiv = document.createElement("div");
    divContainerTareaDiv.className = "div-contai-tarea-div"
    // input tipo check 
    let inputCheck = document.createElement("input");
    inputCheck.type = "checkbox"
    inputCheck.className = "input-checkBox";
    inputCheck.addEventListener('change', (e) => {
        let checkk = inputCheck.checked;
        if (checkk === true) {
            alert('es true')
            divContainer.className = `${divContadorTrue}`
            h3TaskComplete.textContent = `${contadorComplete += 1}: task Complete`
            h3TaskComplete.style = "display: none;"
            h3Active.textContent = `${contadorActive -= 1}: task active`
            butonDelete.addEventListener('click', (e) => {
                h3TaskComplete.textContent = `${contadorComplete -= 1}: task remaining`
                h3Active.textContent = `${contadorActive += 1}: task active`
                e.target.parentNode.parentNode.remove();
                // arrayTareas.splice(Index, 1,)

            })
        }
        else {
            alert('es false')
            divContainer.className = `${divContadorfalse}`
            h3Active.textContent = `${contadorActive += 1}: task active`
            h3TaskComplete.textContent = `${contadorComplete -= 1}: task remaining`

        }
    }, false)
    //h3 tarea
    let h3Tareaa = document.createElement("h3");
    h3Tareaa.className = "h3Tarea";
    h3Tareaa.textContent = nombreTarea;
    // div contenedor de los botones 
    const divContainerBotones = document.createElement("div");
    divContainerBotones.className = "uwu";
    //boton edit y delete
    let botonEdit = document.createElement("button");
    botonEdit.textContent = "Edit";
    botonEdit.className = "button-edit";
    botonEdit.id = "editar"
    botonEdit.addEventListener('click', (e) => {
        let nombreEdit = prompt('ingrese el texto');
        h3Tareaa.textContent = `${nombreEdit}`
    })
    let butonDelete = document.createElement("button");
    butonDelete.id = 'deletee'
    butonDelete.textContent = "Delete";
    butonDelete.className = "button-delete";
    butonDelete.addEventListener('click', (e) => {
        h3Task.textContent = `${contadorTask -= 1}: task remaining`
        h3Active.textContent = `${contadorActive -= 1}: task active`
        e.target.parentNode.parentNode.remove();
        // arrayTareas.splice(Index, 1,)

    })
    //inserciones 
    section.insertAdjacentElement("beforeend", divContainer);
    divContainer.insertAdjacentElement("beforeend", divContainerTareaDiv);
    divContainerTareaDiv.insertAdjacentElement("afterbegin", h3Tareaa);
    divContainerTareaDiv.insertAdjacentElement("afterbegin", inputCheck);
    divContainer.insertAdjacentElement("beforeend", divContainerBotones);
    divContainerBotones.insertAdjacentElement("afterbegin", butonDelete);
    divContainerBotones.insertAdjacentElement("afterbegin", botonEdit);
}
let active = document.getElementById('Active');
let formulario2 = document.getElementById('formulario2');
formulario2.style = 'display:none;'
let formulario = document.getElementById('formulario');
//h3
let h3Task = document.getElementById('h3-Task');
let h3TaskComplete = document.getElementById('h3-complete');
let h3Active = document.getElementById('h3-active');
//contadores
let contadorComplete = 0;
let contadorTask = 0;
let contadorActive = 0;
h3Active.style = 'display: none;'
//envio de formulario
formulario.addEventListener('submit', (e) => {
    h3Task.textContent = `${contadorTask += 1}: task remaining`
    h3Active.textContent = `${contadorActive += 1}: task active`
    e.preventDefault();
    let tarea = document.getElementById('tarea').value;
    let index = arrayTareas.indexOf(tarea)
    formulario.reset()
    imprimirHtml(tarea);

})
//complete
let buttonComplete = document.getElementById('tarea-completada')
buttonComplete.addEventListener('click', (e) => {
    h3Task.style = "display:none"
    h3TaskComplete.style = "display: block"
    h3Active.style = "display:none"
    let uno = document.getElementsByClassName("uno")
    for (var i = 0; i < uno.length; i++) {
        uno[i].style.display = "block";
    }

    let dos = document.getElementsByClassName("dos")
    for (var i = 0; i < dos.length; i++) {
        dos[i].style.display = "none";
    }
})
//all
let buttonAll = document.getElementById('all')
buttonAll.addEventListener('click', (e) => {
    h3Task.style = "display:block"
    h3TaskComplete.style = "display: none"
    h3Active.style = "display:none"
    h3TaskComplete.style = "display: none;"
    let uno = document.getElementsByClassName("uno")
    for (var i = 0; i < uno.length; i++) {
        uno[i].style.display = "block";
    }
    let dos = document.getElementsByClassName("dos")
    for (var i = 0; i < dos.length; i++) {
        dos[i].style.display = "block";
    }
})
//active
let buttonActive = document.getElementById('Active')
buttonActive.addEventListener('click', (e) => {
    h3Task.style = "display:none"
    h3TaskComplete.style = "display: none"
    h3Active.style = "display:block"
    let uno = document.getElementsByClassName("uno")
    for (var i = 0; i < uno.length; i++) {
        uno[i].style.display = "none";
    }
    let dos = document.getElementsByClassName("dos")
    for (var i = 0; i < dos.length; i++) {
        dos[i].style.display = "block";
    }
})