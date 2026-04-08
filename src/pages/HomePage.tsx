// pages/HomePage.tsx
import CrearGrupo from "./CreateGroupe";
import { useState } from "react";
// Definimos un objeto de estilos en línea para mantenerlo ordenado y usar tus variables
const styles = {
  // 1. Contenedor de la página de inicio (para ocupar todo el alto visible)
  homeContainer: {
    display: 'flex',
    justifyContent: 'center', // Centrado horizontal
    alignItems: 'center',     // Centrado vertical
    height: '100%',           // Ocupa el alto del contenedor padre (.content)
    minHeight: '70vh',        // Asegura que tenga altura incluso si está vacío
  },

  // 2. La tarjeta centrada
  card: {
    background: 'var(--bg)',
    padding: '40px',
    borderRadius: '16px',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow)',
    textAlign: 'center' as const, // Forzamos el tipo para TypeScript
    width: '90%',               // Ancho responsivo dentro del móvil
    maxWidth: '350px',          // No crece demasiado
  },

  title: {
    fontSize: '24px',
    color: 'var(--text-h)',
    marginBottom: '8px',
    marginTop: '0',
  },

  subtitle: {
    color: 'var(--text)',
    marginBottom: '24px',
    fontSize: '16px',
  },

  // 3. Contenedor para los botones (en columna para móvil)
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px', // Espacio entre botones
  },

  // 4. Botón Principal (Acento morado)
  primaryBtn: {
    background: 'var(--accent)',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },

  // 5. Botón Secundario (Estilo esquema)
  secondaryBtn: {
    background: 'var(--accent-bg)',
    color: 'var(--accent)',
    border: `1px solid var(--accent-border)`,
    padding: '12px 20px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

export default function Home() {
  const [showFormulario, SetShowFormulario] = useState(false)

  const openForm = () => SetShowFormulario(true);
  const closeForm = () => SetShowFormulario(false);

  const manejarCreacionFinal = (nombre: string, foto: File | null) => {
  // 1. Creamos el objeto del nuevo grupo
  const nuevoGrupo = {
    id: Date.now(), // Un ID único usando el tiempo actual
    nombre: nombre,
    // Nota: Guardar archivos (File) en LocalStorage es complejo, 
    // por ahora guardaremos un placeholder o un string.
    foto: foto ? "📷 Foto subida" : "📁 Sin foto" 
  };

    // 2. Traemos los grupos que ya existan en el storage
    const gruposGuardados = localStorage.getItem('mis-grupos');
    const gruposActuales = gruposGuardados ? JSON.parse(gruposGuardados) : [];

    // 3. Añadimos el nuevo y guardamos
    const nuevaLista = [...gruposActuales, nuevoGrupo];
    localStorage.setItem('mis-grupos', JSON.stringify(nuevaLista));

  
    closeForm();
  };

  if (showFormulario){
    return(
      <>
      <CrearGrupo onCerrar={closeForm} onCrear={manejarCreacionFinal}/>
      </>
    );
    }
  return (

    <div style={styles.homeContainer}>
      
      {/* EL DIV CENTRADO CON DOS BOTONES */}
      <div style={styles.card}>
        <h2 style={styles.title}>¡Bienvenido!</h2>
        <p style={styles.subtitle}>Selecciona una acción para comenzar:</p>
        
        <div style={styles.buttonContainer}>
          <button style={styles.primaryBtn}
            onClick={openForm}>
            Crear Nuevo Grupo
          </button>
          
          <button style={styles.secondaryBtn}>
            Unirme a un grupo
          </button>
        </div>
      </div>

    </div>
  );
}