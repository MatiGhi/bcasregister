import React from 'react';

//CSS
import '../style.css';

//FontIcon
import '../assets/fonts/fontIcon2/flaticon.css';

//Styled Components
import {InputGroup, InputStyled, ValidateIconEye, PasswordMessage} from '../styledElements/formElements';

//Icons
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordComponent = ({estado, cambiarEstado, type, name, placeholder, message, regex, repeat}) => {

    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value})
    }

    const validacion = (e) => {
        if (regex) {   
            if (regex.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'}) 
            } else {
                cambiarEstado({...estado, valido: 'false'})
            }
        }

        if(repeat){
            repeat()
        }
    }

    const togglePass = (e) => {

        const pass = document.querySelector("#pass");
        const repPass = document.querySelector("#repPass");

        pass.type === 'password' ? pass.type = 'text' : pass.type = 'password';
        repPass.type === 'password' ? repPass.type = 'text' : repPass.type = 'password';
    }

    return (
        <div className="col-6 col-md-6 input-pl">
            <InputGroup>
                <InputStyled 
                    type={type} 
                    placeholder= {placeholder} 
                    id= {name} 
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                    />
                    <ValidateIconEye icon={faEyeSlash} onClick={togglePass} valido={estado.valido}/>  
            </InputGroup>
            <PasswordMessage valido={estado.valido}>{message}</PasswordMessage>
        </div>   
    );
}

export default PasswordComponent;

