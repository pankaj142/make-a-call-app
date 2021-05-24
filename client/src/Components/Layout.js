import {Container} from "semantic-ui-react";
import Navbar from "./Navbar";
 
function Layout({children}){
    return(
        <>
            <Navbar/>
            <Container style={{ paddingTop: "1rem" }} text>
                {children}
            </Container>
        </>
    )
}

export default Layout;