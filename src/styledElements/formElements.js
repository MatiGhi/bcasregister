import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//React-Bootstrap Elements
import { Form } from 'react-bootstrap';

const colors = {
    border: "#0075FF",
    error: "#bb2929",
    success: "#1ed12d",
    bg_bcas: "#0CCCBD",
    blue_bold: "#1c2357",
} 


const InputStyled = styled.input`

/* .mb-4 
margin-bottom: 1.5rem!important;*/

margin-bottom: 5px;

/* .form-control-lg */
min-height: calc(1.5em + 1rem + 2px);
padding: .5rem 1rem;
font-size: 1.25rem;
/*border-radius: .3rem;*/

/* .form-control */
/*display: block;*/
/*width: 100%;*/
padding: .375rem .75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
background-color: #fff;
background-clip: padding-box;
/*border: 1px solid #ced4da;*/
border: .12rem solid #C9D1D7;
-webkit-appearance: none;
appearance: none;
/*border-radius: .25rem;*/
border-radius: .4rem!important;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

&::placeholder{
    /*color:#4D5F6E;*/
    color:#566775;
    font-size: .85rem;
    font-weight: lighter;
}

/* .row>* */
flex-shrink: 0;
/*width: 100%;*/
max-width: 100%;
/*padding-right: calc(var(--bs-gutter-x)/ 2);*/
padding-right: 20px!important;
padding-left: calc(var(--bs-gutter-x)/ 2);
margin-top: var(--bs-gutter-y);

/*.form-control:focus */
&:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

/* CUSTOM */
width: 100%;
background: #fff;
border-radius: 3px;
height: 45px;
line-height: 45px;
padding: 0 5px 0 5px;
transition .3s ease all;

${props => props.valido === 'true' && css`
    //border: 3px solid;
    //border: 1px solid #ced4da;
    border: 1px solid ${colors.success} !important;
`}

${props => props.valido === 'false' && css`
    border: 3px solid ${colors.error} !important;
`}

`;

//Input Text
const StyledTextInput = styled(Form.Control)`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 5px 0 5px;
    transition .3s ease all;

    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}

    ${props => props.valido === 'false' && css`
        border: 3px solid ${colors.error} !important;
    `}
`;

//Input Check
const StyledCheckBoxInput = styled(Form.Check)`

`

//Input Radio
// const StyledCheckRadioInput = styled(Form.Check.input[Type='radio'])`
// const StyledCheckRadioInput = styled(Form.Check.input.Type='radio')`

//Label Check Input
const StyledLabelCheckInput = styled(Form.Check.Label)`
    // position: absolute;
    // top: 25%;
    // left: 4px;
    // width: 24px;
    // height: 24px;
    // border-radius: 50%;
    // background: white;
    // border: 0.5px solid #bebebe;
`;

const StyledCheckRadioInput = styled(Form.Check)`
// opacity: 0;
// z-index: 1;
// border-radius: 50%;
// width: 24px;
// height: 24px;
// margin-right: 10px;

//.content-radio input{}
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
visibility: hidden;
position: relative;
right: -2%;

//.content-radio input + i{}
background:#ffffff;
border: 1px solid var(--bg_bcas);
position: absolute;
right: 34%;
top: 2px;

//.content-radio input[type=radio] + i {}
height: 20px;
width: 20px;
border-radius: 100%;
right: 34%;


//.content-radio input[type=radio] + i:before{}
    content:'';
    display: block;
    height: 12px;
    width: 12px;
    background: red;
    border-radius: 100%;
    position: relative;
    z-index: 1;
    top: 3px;
    left: 3px;
    background: var(--bg_bcas);
    transition: all 0.25s ease;
    transform: sacale(0);
    opacity: 0;

//.content-radio input[type=radio]:checked + i:before{}
    transform: scale(1);
    opacity: 1;

//.content-check input[type="checkbox"] + i:before{
    content: "";
    width:15px;
    height: 15px;
    float: left;
    margin: 0.3em 0.5em 0 0;
    border: 1px solid #ccc;
    border-radius: 28%;
    background: #fff;


//.content-check input[type="checkbox"]:checked + i:before{}
    border-color: var(--bg_becas);

//.content-check input[type="checkbox"]:checked + i:after {}
    content:"";
    width: 8px;
    height: 5px;
    border: 1px solid var(--bg_bcas);
    float: left;
    margin-left: -1.2em;
    border-right: 0;
    border-top:0;
    border-top:0.5em;
    transform: rotate(-55deg);


&:hover ~ ${StyledLabelCheckInput} {
//&:hover {
//   background: #bebebe;
//   &::after {
//     content: "Hola";
//     display: block;
//     border-radius: 50%;
//     width: 12px;
//     height: 12px;
//     margin: 6px;
//     background: ${colors.bg_bcas};
  }
}

${(props) =>
  props.checked &&
  ` 
    &:checked + ${StyledLabelCheckInput} {
    //&:checked {
    // background: ${colors.bg_bcas};
    // border: 1px solid ${colors.bg_bcas};
    // &::after {
    //   content: "";
    //   display: block;
    //   border-radius: 50%;
    //   width: 12px;
    //   height: 12px;
    //   margin: 6px;
    //   box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
    //   background: black;
    }
  }
`}
`;

const StyledCheckRadio = styled.input`

//Nota
//El mismo valor en estado HOVER!
//&:hover

//.content-radio input{}
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
// visibility: hidden;
position: relative;
right: -2%;

//Listo 
//.content-radio input + i{}
// background:#ffffff;
// border: 1px solid var(--bg_bcas);
// position: absolute;
// right: 34%;
// top: 2px; 

& + i {
    background: #ffffff;
    border: 1px solid ${colors.bg_bcas};
    position: absolute;
    right: 34%
    top: 2px;
}

&:[type=radio]:checked + i {
    height: 20px;
    width: 20px;
    border-radius:100%;
    right: 34%;
}

//Listo Arriba
//.content-radio input[type=radio] + i {}
// height: 20px;
// width: 20px;
// border-radius: 100%;
// right: 34%;


&:[type=radio] + i {
    &::before {
        content:'';
        display: block;
        height: 12px;
        width: 12px;
        background: red;
        border-radius: 100%;
        position: relative;
        z-index: 1;
        top: 3px;
        left: 3px;
        background: var(--bg_bcas);
        transition: all 0.25s ease;
        transform: sacale(0);
        opacity: 0;
    }
}

//Listo Arriba
//.content-radio input[type=radio] + i:before{}
    // content:'';
    // display: block;
    // height: 12px;
    // width: 12px;
    // background: red;
    // border-radius: 100%;
    // position: relative;
    // z-index: 1;
    // top: 3px;
    // left: 3px;
    // background: ${colors.bg_bcas};
    // transition: all 0.25s ease;
    // transform: sacale(0);
    // opacity: 0;

&:[type=radio]:checked + i{
    &::before {
        transform: scale(1);
        opacity: 1;
    }
} 

//Listo Arriba
//.content-radio input[type=radio]:checked + i:before{}
    // transform: scale(1);
    // opacity: 1;


&:[type=checkbox] + i{
    &::before {
        content: "";
        width:15px;
        height: 15px;
        float: left;
        margin: 0.3em 0.5em 0 0;
        border: 1px solid #ccc;
        border-radius: 28%;
        background: #fff;
    }
}

//Listo Arriba
//.content-check input[type="checkbox"] + i:before{
    // content: "";
    // width:15px;
    // height: 15px;
    // float: left;
    // margin: 0.3em 0.5em 0 0;
    // border: 1px solid #ccc;
    // border-radius: 28%;
    // background: #fff;

    
&:[type="checkbox"]:checked + i{
    &::before {
        border-color: ${colors.bg_bcas};
    }

//Listo Arriba
//.content-check input[type="checkbox"]:checked + i:before{}
    // border-color: var(--bg_becas);


&:[type="checkbox"]:checked + i{
    &::after {
        content:"";
        width: 8px;
        height: 5px;
        border: 1px solid var(--bg_bcas);
        float: left;
        margin-left: -1.2em;
        border-right: 0;
        border-top:0;
        border-top:0.5em;
        transform: rotate(-55deg);
    }
}   



//Listo Arriba
//.content-check input[type="checkbox"]:checked + i:after {}
    // content:"";
    // width: 8px;
    // height: 5px;
    // border: 1px solid var(--bg_bcas);
    // float: left;
    // margin-left: -1.2em;
    // border-right: 0;
    // border-top:0;
    // border-top:0.5em;
    // transform: rotate(-55deg);


//&:hover ~ ${StyledLabelCheckInput} {
//&:hover {
//   background: #bebebe;
//   &::after {
//     content: "Hola";
//     display: block;
//     border-radius: 50%;
//     width: 12px;
//     height: 12px;
//     margin: 6px;
//     background: ${colors.bg_bcas};
  //}
//}

${(props) =>
  props.checked &&
  ` 
    &:checked + ${StyledLabelCheckInput} {
    //&:checked {
    // background: ${colors.bg_bcas};
    // border: 1px solid ${colors.bg_bcas};
    // &::after {
    //   content: "";
    //   display: block;
    //   border-radius: 50%;
    //   width: 12px;
    //   height: 12px;
    //   margin: 6px;
    //   box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
    //   background: black;
    //}
  //}
//`}
`;


// const RadioButtonLabel = styled.label`
//   position: absolute;
//   top: 25%;
//   left: 4px;
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   background: white;
//   border: 1px solid #bebebe;
// `;

// const RadioButton = styled.input`
//   opacity: 0;
//   z-index: 1;
//   border-radius: 50%;
//   width: 24px;
//   height: 24px;
//   margin-right: 10px;
//   &:hover ~ ${RadioButtonLabel} {
//     background: #bebebe;
//     &::after {
//       content: "";
//       display: block;
//       border-radius: 50%;
//       width: 12px;
//       height: 12px;
//       margin: 6px;
//       background: #eeeeee;
//     }
//   }
//   ${(props) =>
//     props.checked &&
//     ` 
//     &:checked + ${RadioButtonLabel} {
//       background: #db7290;
//       border: 1px solid #db7290;
//       &::after {
//         content: "";
//         display: block;
//         border-radius: 50%;
//         width: 12px;
//         height: 12px;
//         margin: 6px;
//         box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
//         background: white;
//       }
//     }
//   `}
// `;


//Label Check Input
// const StyledLabelCheckInput = styled(Form.Check.Label)`

// `

// const Form = styled.form`
//     margin-bottom: 20px;
//     //padding: 50px;
//     padding: 10px;
//     /*background-color: #ccc;*/

//     /*@media (max-width:800px){
//         grid-template-columns: 1fr;
//         background-color: #BD392F;
//     }*/
// `;

const InputGroup = styled.div`

    /*display: flex;
    flex-direction: row;
    height: 0.5rem !important;*/

    position: relative;
    z-index: 90;

`;

const Message = styled.p`
width: 150px;
padding-left: 5px;
font-size: 12px;
margin-bottom: 0;
color: ${colors.error};
display: none;

${props => props.valido === 'true' && css`
    display: none;
`}

${props => props.valido === 'false' && css`
    display: block;
`}

`;

const PasswordMessage = styled.p`
width: 350px;
padding-left: 5px;
font-size: 12px;
margin-bottom: 0;
color: ${colors.error};
display: none;

${props => props.valido === 'true' && css`
    display: none;
`}

${props => props.valido === 'false' && css`
    display: block;
`}

`;

const ValidateIcon = styled(FontAwesomeIcon)`
    position:absolute;
    //right: 10px;
    right: 5px;
    bottom: 18px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

    ${props => props.valido === 'true' && css`
    opacity: 1;
    color: ${colors.success};
    `}

    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colors.error};
    `}
`;

const ValidateIconEye = styled(FontAwesomeIcon)`
    position:absolute;
    //right: 10px;
    right: 5px;
    bottom: 18px;
    z-index: 100;
    font-size: 16px;
    opacity: 1;
    color: #b5b5b5;
    cursor: pointer; 

    ${props => props.valido === 'true' && css`
    opacity: 1;
    border-color: ${colors.success};
    `}

`;


const TermsWrapper = styled.div`

/*form-check*/
display: block;
min-height: 1.5rem;
padding-left: 1.5em;
margin-bottom: .125rem;

`

const InputCheckStyled = styled.input`

/*.form-check-input[type=checkbox]{}*/

border-radius: .25em;

/*form-check-input{}*/
float: left;
margin-left: -1.5em;

/*.form-check-input {}*/
width: 1em;
height: 1em;
margin-top: .25em;
vertical-align: top;
background-color: #fff;
background-repeat: no-repeat;
background-position: center;
background-size: contain;
border: 1px solid rgba(0,0,0,.25);
-webkit-appearance: none;
appearance: none;
-webkit-print-color-adjust: exact;
color-adjust: exact;

/*.form-check-input:active {}*/
&:active {
    filter: brightness(90%);
}

/*.form-check-input:focus {}*/
&:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

/*.form-check-input:checked[type=checkbox] {}*/
&:checked[type=checkbox] {
    background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e);
}

/*.form-check-input:checked {}*/
&:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}
`

const LabelInputCheckStyled = styled.label`
/*label {}*/
display: inline-block;
`

const SignUpButton = styled.button`

/*CUSTOM previous on Style.CSS*/
/*.btn-signup {}*/
    background-color: var(--bg_bcas) !important;
    color: whitesmoke !important;
    font-weight: bold !important;
    width: 30%;
    letter-spacing: 0.2px;
    font-size: 14px;

[type=button]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}

/*.rounded-pill {}*/
border-radius: 50rem!important;

/*.btn { */
display: inline-block;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: center;
text-decoration: none;
vertical-align: middle;
cursor: pointer;
-webkit-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: .375rem .75rem;
font-size: 1rem;
border-radius: .25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

const SuccessMessage = styled.p`
    font-size: 14px;
    color: ${colors.success};
    display: none;
`;

const ErrorMessage = styled.div`
    height: 45px;
    line-height: 45px;
    background: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    p {
        margin: 0;
    }
    b {
        margin-left: 10px;
    }
`

export { Form, 
        InputGroup, 
        TermsWrapper, 
        InputCheckStyled, 
        LabelInputCheckStyled, 
        SignUpButton, 
        SuccessMessage, 
        ErrorMessage, 
        Message, 
        PasswordMessage,
        ValidateIcon,
        ValidateIconEye,
        StyledTextInput,
        StyledCheckBoxInput,
        StyledCheckRadioInput,
        StyledLabelCheckInput,
        StyledCheckRadio,
        InputStyled
        };
