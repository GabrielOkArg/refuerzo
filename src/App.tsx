import React from 'react'
// import {TiposBasicos} from './typescript/TiposBasicos';
 // import {ObjetosLiterales} from './typescript/ObjetosLiterales';
// import {Funciones} from './typescript/Funciones';
import {Contador} from './components/Contador'
import {ContadorConHook} from './components/ContadorConHook'
import {Login} from './components/Login';
import {Usuarios} from './components/Usuarios';

 const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TypeScript react</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      <Usuarios />
      {/* <Login /> */}
    </div>
  )
}

export default App;