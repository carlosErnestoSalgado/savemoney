import { useEffect } from "react";
import { useState } from "react";

// Definimos la forma del objeto
interface Grupo {
  id: number;
  nombre: string;
}
export default function AllGroups (){
    const [group, SetGroups] = useState<Grupo[]>([]);
    useEffect(() => {
        const groupList = localStorage.getItem('mis-grupos');
        if (groupList) SetGroups(JSON.parse(groupList))
    }, []);

    return(
        <>
        <h1> 👪 Lista de los grupos</h1>
        <div className="content">
            {group.length === 0 ? (<p>No hay grupos creados</p>)
            :
            (
                <div style={styles.lista}>
                    {
                        group.map((g) => (
                            <div key={g.id} style={styles.item}>
                            <span style={styles.icono}>👥</span>
                            <span style={styles.nombre}>{g.nombre}</span>
                            </div>
                        ))
                    }
                </div>
            )
            
            }
        </div>
        </>
    );
}

const styles = {
  lista: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    background: 'var(--accent-bg)', // Tu color verde clarito
    border: '1px solid var(--accent-border)',
    borderRadius: '12px',
    color: 'var(--text-h)',
  },
  icono: { marginRight: '15px', fontSize: '20px' },
  nombre: { fontWeight: '600' }
};