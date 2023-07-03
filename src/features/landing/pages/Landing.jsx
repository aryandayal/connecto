import "./landingPage.css";
import homeImage from "../images/cPeople.svg"
import {useDocumentTitle} from "utils/hooks/useDocumentTitle";
import { Link } from "react-router-dom";

export const Landing = ()=> {
    useDocumentTitle("Landing")
    return(
    <div className="box-form">
	<div className="left">
		<div className="overlay">
		<h1>connecto</h1>
		<p>Here we can connect through the world</p>
        <img src={homeImage} alt="noImage" className="homeImage" />
		</div>
	</div>
		<div className="right">
			<Link to="/login"><button>Let's Connect</button></Link>
	    </div>
	
</div>
    )
}
