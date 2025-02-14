let tareas = [
    { id: 16, descripcion: "Hacer mercado", completada: false },
    { id: 60, descripcion: "Estudiar para la prueba", completada: false },
    { id: 24, descripcion: "Sacar a pasear a Tobby", completada: false }
];

const mostrarTareas = () => {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${tarea.id}</td>
            <td class="${tarea.completada ? 'completada' : ''}">${tarea.descripcion}</td>
            <td><input type="checkbox" ${tarea.completada ? "checked" : ""} onclick="cambiarEstado(${indice})"></td>
            <td class="boton-eliminar" onclick="eliminarTarea(${indice})">&times;</td>
        `;
        listaTareas.appendChild(fila);
    });
    actualizarResumen();
};

const agregarTarea = () => {
    const tareaInput = document.getElementById("tareaInput");
    const nuevaTarea = tareaInput.value;
    
    if (nuevaTarea !== "") {
        const nuevoId = tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1; 
        tareas[tareas.length] = { id: nuevoId, descripcion: nuevaTarea, completada: false }; 
        tareaInput.value = "";
        mostrarTareas();
    }
};

const eliminarTarea = (indice) => {
    tareas = tareas.filter((_, i) => i !== indice); 
    mostrarTareas();
};

const cambiarEstado = (indice) => {
    tareas[indice].completada = !tareas[indice].completada;
    mostrarTareas();
};

const actualizarResumen = () => {
    document.getElementById("totalTareas").textContent = tareas.length;
    document.getElementById("tareasCompletadas").textContent = tareas.filter(tarea => tarea.completada).length;
};


mostrarTareas();
