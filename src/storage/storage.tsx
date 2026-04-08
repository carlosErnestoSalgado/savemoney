import type Group from "../interfaces/interfaces"

function saveGroup({nombre, foto, descripcion}:Group) {
    console.log("Save group in storage")
    const newGroup = {
        id: Date.now(),
        nombre: nombre,
        foto: foto,
        descripcion: descripcion
    }

    // Tomo los grupos existentes del LocalStorage
    const groups = localStorage.getItem('mis-grupos');
    // Valido si existen grupos, si no, inicio un array vacio
    const currentGroups = groups ? JSON.parse(groups) : [];
    // Añado el nuevo grupo a la lista existente
    const updatedGroups = [...currentGroups, newGroup];
    // Guardo la lista actualizada en LocalStorage
    localStorage.setItem('mis-grupos', JSON.stringify(updatedGroups));
}


export default saveGroup;