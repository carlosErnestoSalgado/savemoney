import React, { useState } from 'react';
import type Group from "../interfaces/interfaces"

interface CrearGrupoProps {
  onCerrar: () => void;
  onCrear: (group: Group) => void;
}

export default function CrearGrupo({ onCerrar, onCrear }: CrearGrupoProps) {
  const [nombre, setNombre] = useState('');
  const [foto, setFoto] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre.trim()) {
      onCrear({ nombre, foto, descripcion: undefined });
      onCerrar();
    }
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.formCard}>
        <h2 style={styles.title}>Nuevo Grupo</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Input de Nombre */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nombre del grupo</label>
            <input 
              type="text" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Equipo de Fútbol"
              style={styles.input}
              required
            />
          </div>

          {/* Input de Foto */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Foto del grupo</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setFoto(e.target.files ? e.target.files[0] : null)}
              style={styles.fileInput}
            />
            <small style={{ color: 'var(--text)', fontSize: '12px' }}>
              Opcional: Sube una imagen representativa.
            </small>
          </div>

          {/* Botones de Acción */}
          <div style={styles.buttonGroup}>
            <button 
              type="button" 
              onClick={onCerrar} 
              style={styles.cancelBtn}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              style={styles.createBtn}
            >
              Crear Grupo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- Estilos enfocados en tu paleta Verde ---
const styles = {
  modalOverlay: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formCard: {
    background: 'var(--bg)',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '20px',
    padding: '24px',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow)',
  },
  title: {
    margin: '0 0 20px 0',
    fontSize: '22px',
    color: 'var(--text-h)',
    textAlign: 'center' as const,
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--text-h)',
  },
  input: {
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid var(--border)',
    background: 'var(--bg)',
    color: 'var(--text-h)',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  fileInput: {
    padding: '8px 0',
    color: 'var(--text)',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '10px',
  },
  createBtn: {
    flex: 2,
    background: 'var(--accent)',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '15px',
  },
  cancelBtn: {
    flex: 1,
    background: 'transparent',
    color: 'var(--text)',
    border: '1px solid var(--border)',
    padding: '14px',
    borderRadius: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '15px',
  },
};