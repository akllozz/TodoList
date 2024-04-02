var listadoTareas = [
    {id: 0,
    descripcion: 'Farmear artefactos para Acheron',
    checkbox: false},
    {id: 1,
    descripcion: 'Hacer el Mundo Simulado: La Plaga',
    checkbox: false},
    {id: 2,
    descripcion: 'Hacer evento limitado en Honkai Star Rail',
    checkbox:false},
]

const seccionListado = document.querySelector("#listado-tareas");
const tareaInput = document.querySelector("#input-tarea");
const btnAgregar = document.querySelector("#agregar-tarea");
const totalesTareas = document.querySelector("#counter-tareas");
var totalesRealizadas = document.querySelector("#counter-realizadas");
var idBase = 2;
var counterRealizadas = 0;

renderTareas()

function eliminarTarea(id){
    index = listadoTareas.findIndex((ele) => ele.id == id);
    listadoTareas.splice(index, 1);
    renderTareas(); 
}

function tareaRealizada() {
    let checkboxes = document.querySelectorAll(".chkbx")
    const checkboxesArray = Array.from(checkboxes)
    const checkFilter = checkboxesArray.filter(x => x.checked == true)
    totalesRealizadas.innerHTML = checkFilter.length
}

function crearId(){
        idBase +=1
    return idBase
}

function renderTareas(){
    let html = ""
    for (let tarea of listadoTareas) {
        html += `
        <tr>
        <th scope="row" class="text-center tinta" id="numero">${tarea.id}</th>
        <td class= "tinta">${tarea.descripcion}</td>
        <td class="text-center tinta"><input type="checkbox" id="chkbx${tarea.id}" class="chkbx" onclick="tareaRealizada()"></td>
        <td class="text-center tinta"><button type="button" class="btn-close" aria-label="Close" onclick="eliminarTarea(${tarea.id})"></button></td>                        
        </tr>
        `;

    }
    seccionListado.innerHTML = html;
    totalesTareas.innerHTML = listadoTareas.length
    }



btnAgregar.addEventListener("click", () => {
    const nuevaTarea = {
        id: crearId(),
        descripcion: tareaInput.value,
        checkbox:false
    }

    listadoTareas.push(nuevaTarea)
    tareaInput.value = ""
    renderTareas()
})