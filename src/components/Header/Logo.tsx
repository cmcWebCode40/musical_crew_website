import React from "react";
import logo from "../../images/logo.png";
import {Link} from 'react-router-dom';


const Logo: React.FC = () => {
	return (
		<Link to="/">
		<div className="logo">
			<img src={logo} alt="Logo" />
		</div>
		</Link>
	);
};

export default Logo;
