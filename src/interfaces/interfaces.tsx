// Interfaces

// Grupo
export default interface Group {
    nombre: string,
    foto: File | null, // Puede ser un File o un string placeholder
    descripcion?:string,
    integrantes?: User[]
}

// Usuario
export interface User {
    nombre: string,
    email: string,
    password: string,
    groups: Group[],
    salario: number,
    fechaNacimiento: Date,
    genero: "masculino" | "femenino" | "otro",
    goal_ahorro: number
}


