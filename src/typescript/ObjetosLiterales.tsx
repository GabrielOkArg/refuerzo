import React from 'react';


interface Persona{
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion{
    pais:string;
    casa:number;
}


export const ObjetosLiterales = () => {

    const persona : Persona = {
        nombreCompleto: 'gabriel',
        edad: 37,
        direccion: {
            pais: 'argentina',
            casa: 34
        }
    }


    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
