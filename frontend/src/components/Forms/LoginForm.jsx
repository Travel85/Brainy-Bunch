import styled from "styled-components";
import { Link } from "react-router-dom";

function LoginForm(){
    console.log("Login")
    const regTitle=" Registriere "
    return(
       
        <StyledLoginForm>
        <div>
        <br />
        <label>Username:</label><br />
        <input type="text">
        </input><br />
        <label>Passwort:  </label>  <br />
        <input type="password" /> <br />
        <input type="button" value="Bestätigen" name="submit" className="submitLogin"/>
        
       <br />
        Neu hier? 

        <Link to ="/register">
        {regTitle}
        </Link>   
            dich hier.
        </div>
        </StyledLoginForm>
      
    )
}



const StyledLoginForm = styled.div`
    text-align: center;
    
`

export default LoginForm;