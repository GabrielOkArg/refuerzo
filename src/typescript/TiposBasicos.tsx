import React from 'react'

export const TiposBasicos = () => {
    const nombre: string = 'Gabriel';
    const edad : number = 35;
    const estaActivo : boolean = true;
    
    const poderes: string[]  = ['Velocidad','Volar','Respirar en el agua'];
    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre},{edad},{(estaActivo)? 'Activo': 'no activios'} 
            {/* Lo de arriba es un operador ternario pregunta en que estado est y muestra lo que corresponde */}
            <hr />
            {poderes.join(', ')}
            {/* con .join(', n') despues de cada elemento le concatena una coma y un espacio */}
        </>
    )
}
