import styled from "styled-components";
import { Link } from "react-router-dom";

function RegisterForm(){
    const loginTitle=" Melde "
    return(
        <StyledRegisterForm>
        <div className="registerForm">
            <label>Name: </label><br />
            <input type="text" /> <br />
            <label>E-Mail-Adresse:</label> <br />
            <input type="e-mail" placeholder="name@email.com"/> <br />
            <label>Passwort:</label> <br />
            <input type="password" /> <br />
            <label>Passwort wiederholen:</label> <br />
            <input type="password" /> <br />
        
            <input type="button" value="Bestätigen" className="buttonSubmitRegister"/> <br /> <br />
        
            <label>Du hast bereits einen Account? 
                <Link to="/login">
                 {loginTitle}
                </Link>
                dich hier an.
            </label>
        </div>
        </StyledRegisterForm>
    )
}
export default RegisterForm;

const StyledRegisterForm=styled.div`
    text-align: center;
    padding-bottom:10px;
    margin-bottom: 10px;
`