import React, { Fragment, useState } from 'react';

//Style CSS
import '../style.css';

//FontIcon
import '../assets/fonts/fontIcon2/flaticon.css';

//Styled Elements
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, TermsWrapper, InputCheckStyled, LabelInputCheckStyled, SignUpButton, SuccessMessage, ErrorMessage } from '../styledElements/formElements';

//Icons
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

//Components
import InputComponent from './InputComponent';
import PasswordComponent from './PasswordComponent';

const Formulario = (props) => {

    //Estudiante
    const [edadEstudiante, cambiarEdadEstudiante] = useState('si');
    const [nombreEstudiante, cambiarNombreEstudiante] = useState({campo: '', valido: null});
    const [primerApellidoEstudiante, cambiarPrimerApellidoEstudiante] = useState({campo: '', valido: null});
    const [segundoApellidoEstudiante, cambiarSegundoApellidoEstudiante] = useState({campo: '', valido: null});
    const [emailEstudiante, cambiarEmailEstudiante] = useState({campo: '', valido: null});

    //Representante
    const [nombreRepresentante, cambiarNombreRepresentante] = useState({campo: '', valido: null});
    const [primerApellidoRepresentante, cambiarPrimerApellidoRepresentante] = useState({campo: '', valido: null});
    const [segundoApellidoRepresentante, cambiarSegundoApellidoRepresntante] = useState({campo:'', valido: null});
    const [emailRepresentante, cambiarEmailRepresentante] = useState({campo: '', valido: null});

    //Password
    const [pass, cambiarPass] = useState({campo: '', valido: null});
    const [conPass, cambiarConPass] = useState({campo: '', valido: null});

    //Noticias y Terminos
    const [noticias,cambiarNoticias] = useState(false)
    const [terminos,cambiarTerminos] = useState(false)

    const [formularioValido, cambiarFormularioValido] = useState(null);

    //Expresiones Regulares
    const expresiones = {

        //Probar en nombre: Abd al-Aziz, Jean-Pierre, Jean-François, Maria del Carmen, João.
        //Probar en primerApellido y segundoApellido: Mejía-Ricart, García-Godoy Cáceres, Prats-Ramírez de Pérez.
        //Probar en email: fakeemail123@whateveryoulike.com /.fr
        //Probar en password: w3Unpocodet0d0

        nombre: /^[a-zA-ZÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÇçÃẼĨÕŨãẽĩõũÑñÅåŮů]{1,5}[ '-]?[a-zA-ZÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÇçÃẼĨÕŨãẽĩõũÑñÅåŮů]{1,6}[ '-]?[a-zA-ZÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÇçÃẼĨÕŨãẽĩõũÑñÅåŮů]{1,9}$/,
        primerApellido: /^[a-zA-ZÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÇçÃẼĨÕŨãẽĩõũÑñÅåŮů]{1,5}[ '-]?[a-zA-ZÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÇçÃẼĨÕŨãẽĩõũÑñÅåŮů]{1,6}[ '-]?[a-zA-ZÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÇçÃẼĨÕŨãẽĩõũÑñÅåŮů]{1,7}$/,
        segundoApellido: /^[a-zA-ZÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÇçÃẼĨÕŨãẽĩõũÑñÅåŮů]{1,5}[ '-]?[a-zA-ZÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÇçÃẼĨÕŨãẽĩõũÑñÅåŮů]{1,6}[ '-]?[a-zA-ZÂÊÎÔÛâêîôûÄËÏÖÜäëïöüÀÈÌÒÙàèìòùÁÉÍÓÚáéíóúÇçÃẼĨÕŨãẽĩõũÑñÅåŮů]{1,7}$/,
        email: /^([\d\w]{1,50}[@][a-zA-Z]{1,15}[.][a-zA-Z]{1,5}?[.a-zA-Z]{1,4})$/, //test@test.com?.ar
        password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,32}$/
    }



    const toggleClassInfo = (e) => {
        const containerInfo = document.querySelector("#containter-info");
        e.type === 'mouseover' ? containerInfo.classList.remove('info-hidden') : containerInfo.classList.add('info-hidden');
    }

    const validatePassword = () => {
        if(pass.campo.length > 0) {
            if(pass.campo !== conPass.campo){
                cambiarConPass((prevState)=> {
                    return {...prevState, valido: 'false'}
                });
            } else {
                cambiarConPass((prevState)=> {
                    return {...prevState, valido: 'true'}
                });
            }
        }
    };


    const changeEdadEstudiante = (e) => {
        e.target.name === "edadEstudianteSi" ? cambiarEdadEstudiante(e.target.value) : cambiarEdadEstudiante('no')
        e.target.name === "edadEstudianteNo" ? cambiarEdadEstudiante(e.target.value) : cambiarEdadEstudiante('si')
    }

    const changeNoticias = (e) => {
        cambiarNoticias(e.target.checked);
    }

    const changeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }


    //Form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit from Formulario Component');

        if (nombreEstudiante.valido === 'true' && 
        primerApellidoEstudiante.valido === 'true' && 
        segundoApellidoEstudiante.valido === 'true' && 
        emailEstudiante.valido === 'true' &&
        nombreRepresentante.valido === 'true'&&
        primerApellidoRepresentante.valido === 'true' &&
        segundoApellidoRepresentante.valido === 'true' &&
        emailRepresentante.valido === 'true' &&
        pass.valido === 'true' &&
        conPass.valido === 'true' &&
        noticias &&
        terminos
        ) {
            cambiarFormularioValido(true);
            cambiarNombreEstudiante({campo:'', valido: null});
            cambiarPrimerApellidoEstudiante({campo:'', valido: null});
            cambiarSegundoApellidoEstudiante({campo:'', valido: null});
            cambiarEmailEstudiante({campo:'', valido:null});
            cambiarNombreRepresentante({campo:'', valido:null});
            cambiarPrimerApellidoRepresentante({campo:'', valido: null});
            cambiarSegundoApellidoRepresntante({campo:'', valido: null});
            cambiarEmailRepresentante({campo:'', valido:null});
            cambiarPass({campo:'', valido:null});
            cambiarConPass({campo:'', valido:null});
            cambiarNoticias(false);
            cambiarTerminos(false);

            //...AJAX

        } else {
            cambiarFormularioValido(false);
        }
    }

    return (
        <Fragment>
        <Form className="formulario font-formulario" id="form-registro" onSubmit= {handleSubmit}>
            <div id="datos-menorEdad"> 
                <fieldset className="form-group row justify-content-center justify-content-md-start initial-fieldset">
                    <p className="text-center text-md-left font-parrafo">¿Es el estudiante menor de edad?</p>
                        <div className="check-wrapper-si">
                            <label className="form-check-label content-radio text-left" htmlFor="menorSi" style={{ marginLeft:"40px", marginRight:"20px", paddingRight: "45px"}}>
                                <p className="font-check">Si</p>
                            <input 
                                className="form-control" 
                                type="radio" 
                                name="edadEstudianteSi" 
                                id="menorSi" 
                                value="si" 
                                checked= {edadEstudiante === "si"} 
                                onChange={changeEdadEstudiante}>
                            </input><i></i>
                            </label>
                        </div>
                        <div className="check-wrapper-no">
                            <label className="form-check-label content-radio text-left" htmlFor="menorNo" style={{marginRight:"20px", paddingRight: "25px"}}>
                                <p className="font-check">No</p>
                            <input 
                                className="form-control" 
                                type="radio" 
                                name="edadEstudianteNo" 
                                id="menorNo" 
                                value="no" 
                                checked = {edadEstudiante === "no"}
                                onChange={changeEdadEstudiante}>
                            </input><i></i>
                            </label>
                        </div>
                </fieldset>
            </div>
            <hr/> 

            <p className="text-md-start py-2 font-titulo-datos">Datos del estudiante</p>
            {edadEstudiante === 'si' ? 
            <fieldset className="form-group row the-rest-fieldset">
                <div className="col-12 col-md-3 input-pl">
                    <InputComponent 
                        estado={nombreEstudiante}
                        cambiarEstado={cambiarNombreEstudiante}
                        type="text" 
                        placeholder="Nombre" 
                        name="nombreEstudiante" 
                        message="Su Nombre debe tener de 3 a 16 letras, solamente puede contener letras sin espacios." 
                        regex={expresiones.nombre}
                    />
                </div>

                <div className="col-12 col-md-3 input-pl">
                    <InputComponent 
                        estado={primerApellidoEstudiante}
                        cambiarEstado={cambiarPrimerApellidoEstudiante}
                        type="text" 
                        placeholder="Primer Apellido" 
                        name="primerApellidoEstudiante" 
                        message="Por favor, complete correctamente su apellido." 
                        regex={expresiones.primerApellido}
                    />
                </div> 

                <div className="col-12 col-md-3 input-pl">
                    <InputComponent 
                        estado={segundoApellidoEstudiante}
                        cambiarEstado={cambiarSegundoApellidoEstudiante}
                        type="text" 
                        placeholder="Segundo Apellido" 
                        name="segundoApellidoEstudiante" 
                        message="Por favor, complete correctamente su apellido." 
                        regex={expresiones.segundoApellido}
                    />
                </div> 

                <div className="col-12 col-md-3 input-pl">
                    <InputComponent 
                        estado={emailEstudiante}
                        cambiarEstado={cambiarEmailEstudiante}
                        type="email" 
                        placeholder="Email" 
                        name="emailEstudiante" 
                        message= "Por favor, complete su email correctamente. Ej: nombre@direccion.com"
                        regex={expresiones.email}
                    />
                </div> 

            </fieldset> 

                : 
            
            <fieldset className="form-group row the-rest-fieldset">
                <div className="col-6 col-md-6 input-pl pb-1">
                    <InputComponent 
                        estado={nombreEstudiante}
                        cambiarEstado={cambiarNombreEstudiante}
                        type="text" 
                        placeholder="Nombre" 
                        name="nombreEstudiante" 
                        message="Su Nombre debe tener de 3 a 16 letras, solamente puede contener letras sin espacios." 
                        regex={expresiones.nombre}
                    />
                </div>

                <div className="col-6 col-md-6 pb-1">
                    <InputComponent 
                        estado={primerApellidoEstudiante}
                        cambiarEstado={cambiarPrimerApellidoEstudiante}
                        type="text" 
                        placeholder="Primer Apellido" 
                        name="primerApellidoEstudiante" 
                        message="Por favor, complete correctamente su apellido." 
                        regex={expresiones.primerApellido}
                    />
                </div> 

                <div className="col-6 col-md-6 input-pl pt-1">
                    <InputComponent 
                        estado={segundoApellidoEstudiante}
                        cambiarEstado={cambiarSegundoApellidoEstudiante}
                        type="text" 
                        placeholder="Segundo Apellido" 
                        name="segundoApellidoEstudiante" 
                        message="Por favor, complete correctamente su apellido." 
                        regex={expresiones.segundoApellido}
                    />
                </div> 

                <div className="col-6 col-md-6 pt-1">
                    <InputComponent 
                        estado={emailEstudiante}
                        cambiarEstado={cambiarEmailEstudiante}
                        type="email" 
                        placeholder="Email" 
                        name="emailEstudiante" 
                        message= "Por favor, complete su email correctamente. Ej: nombre@direccion.com"
                        regex={expresiones.email}
                    />
                </div> 
                
            </fieldset> }

            <br/>
            <hr/>
            
            {edadEstudiante === 'si' ? 
            <div className="d-flex flex-row align-items-center" style={{height:"50px"}}>
                <p className="text-md-start py-3 font-titulo-datos">Datos del representante</p>
                <div className= "icon-inner"><i id="icon-info" className="flaticon-information-button bg-bcas icon" onMouseOver={toggleClassInfo} onMouseOut={toggleClassInfo}></i></div>
                <div id="containter-info" className="row info info-hidden">
                    <div className="arrow-before"></div><div className="arrow-after"></div>
                    <div className="card globo">
                        <p className="font-info">
                            El representante del estudiante debe coincidir con el representante designado en el pdf de consesión de la beca.
                        </p>
                    </div>
                </div>
            </div> : <p></p>}
 
            {edadEstudiante === 'si' ? 
            <fieldset className="form-group row the-rest-fieldset">
                <div className="col-12 col-md-3 input-pl">
                    <InputComponent 
                        estado={nombreRepresentante}
                        cambiarEstado={cambiarNombreRepresentante}
                        type="text" 
                        placeholder="Nombre" 
                        name="nombreRepresentante" 
                        message="Su Nombre debe tener de 3 a 16 letras, solamente puede contener letras sin espacios." 
                        regex={expresiones.nombre}
                    />
                </div>
                <div className="col-12 col-md-3 input-pl">
                    <InputComponent 
                        estado={primerApellidoRepresentante}
                        cambiarEstado={cambiarPrimerApellidoRepresentante}
                        type="text" 
                        placeholder="Primer Apellido" 
                        name="primerApellidoRepresentante" 
                        message="Por favor, complete correctamente su apellido." 
                        regex={expresiones.primerApellido}
                    />
                </div>
                <div className="col-12 col-md-3 input-pl">
                    <InputComponent 
                        estado={segundoApellidoRepresentante}
                        cambiarEstado={cambiarSegundoApellidoRepresntante}
                        type="text" 
                        placeholder="Segundo Apellido" 
                        name="segundoApellidoRepresentante" 
                        message="Por favor, complete correctamente su apellido." 
                        regex={expresiones.segundoApellido}
                    />
                </div>
                <div className="col-12 col-md-3 input-pl">
                    <InputComponent 
                        estado={emailRepresentante}
                        cambiarEstado={cambiarEmailRepresentante}
                        type="email" 
                        placeholder="Email" 
                        name="emailRepresentante" 
                        message= "Por favor, complete su email correctamente. Ej: nombre@direccion.com"
                        regex={expresiones.email}
                    />
                </div>
                </fieldset> :  <p></p>}

                {edadEstudiante === 'si' ? 
                <br/> :  <p></p>}

                {edadEstudiante === 'si' ?  
                <hr/> :  <p></p>}

                <p className="text-md-start py-2 font-titulo-datos">Contraseña</p> 
                <fieldset className="form-group row the-rest-fieldset">
                    <PasswordComponent 
                        estado={pass}
                        cambiarEstado={cambiarPass}
                        type="password" 
                        placeholder="Contraseña" 
                        name="pass" 
                        id="pass"
                        message= "Su contraseña debe contener de 8 a 32 caracteres, con al menos un dígito, una minúscula, una mayúscula y no puede contener espacios."
                        regex={expresiones.password}
                    />
                    <PasswordComponent 
                        estado={conPass}
                        cambiarEstado={cambiarConPass}
                        type="password" 
                        placeholder="Confirmar contraseña" 
                        name="repPass" 
                        id="repPass"
                        message="Las contraseñas no coinciden." 
                        repeat={validatePassword}
                    />
                </fieldset>

                <br/>
                <hr/>

            <fieldset className="col">
                <TermsWrapper>
                    <InputCheckStyled 
                        req-check type="checkbox" 
                        id="checkDeseo" 
                        name="checkDeseo" 
                        checked={noticias}
                        onChange={changeNoticias}
                    />
                        <LabelInputCheckStyled content-check htmlFor="checkDeseo">
                            Deseo recibir noticias y promociones de Bcas por correo Electrónico.
                        </LabelInputCheckStyled>
                </TermsWrapper>
                <TermsWrapper>
                    <InputCheckStyled 
                    req-check type="checkbox" 
                    id="checkTyC" 
                    name="checkTyC"
                    checked= {terminos}
                    onChange={changeTerminos}
                />
                        <LabelInputCheckStyled content-check htmlFor="checkTyC">
                            Acepto los <a href="# " style= {{ color: "#0CCCBD" }}> Terminos y Condiciones</a>
                        </LabelInputCheckStyled>
                </TermsWrapper>
            </fieldset>

            {formularioValido === false && <ErrorMessage className="mt-3">
                <p>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                    <b>Error:</b> Por favor completa el formulario correctamente.
                </p>
            </ErrorMessage>}

            {formularioValido === true && <SuccessMessage className="mt-3">
                <p>
                    <b>Formulario enviado exitosamente!</b>
                </p>
            </SuccessMessage>}

            <div>
                <div className="container bg-white pt-3">
                    <div className="col-md-12 text-center">
                        <SignUpButton type="submit">CREAR USUARIO</SignUpButton>   
                    </div>
                </div>   
            </div>
        </Form>
        </Fragment>
    );        
}

export default Formulario;
