//Styles
import './style.css';

//Components
import Formulario from './components/Formulario';

const App = () => { 
  return (
        <main className="main-size">
          <div className="row align-items-center justify-content-center">
            {/* <div className= "paddcard font bg-white pt-1">    */}
            {/* <div className= "paddcard font bg-white">   */}
            <div className= "paddcard bg-white">   
              {/* <h1 className="text-center font-titulo blue_bld" style= {{fontFamily:"'Nunito', sans-serif", fontSize: "bold"}}>¡Regístrate!</h1> */}
              <h1 className="text-center font-titulo blue_bld">¡Regístrate!</h1>
              <p className="text-center font-subtitulo">Y podrás solicitar tu beca online</p>
              <Formulario />
            </div>
          </div> 
        </main>
  );
}

export default App;
