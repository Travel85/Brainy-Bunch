import styled from "styled-components";
import { Link } from "react-router-dom";

export function WelcomePage(){
    return(
        <>
        <StyledWelcomePage>
   <div>
    Willkommen bei Brainy Bunch <br />
    <Link to ="/login" style={{textDecoration: "none"}}>
     
     <input type="button" value="Login" name="loginButtonWP" className="loginButtonWP" />
    </Link>
    </div>
    </StyledWelcomePage>
    </>
    )
    
}

const StyledWelcomePage = styled.div`
    font-size: 24px;
    text-align: center;
`