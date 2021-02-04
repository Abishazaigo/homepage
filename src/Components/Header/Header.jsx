import {Link} from "react-router-dom";
import '../Styles/Web.css'
import Menu from './Menu';
import Media from './Media';
import Logo from '../../Images/logo.png';
function Header(){
    return (
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
            <a className="navbar-brand" href="#"><img className="logo" src={Logo}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                        <Menu label="HOME"/>
                        <Menu label="HERBALIFE"/>
                        <Menu label = "STORE"/>
                        <Menu label = "GALLERY"/>
                        <Menu label = "BLOG"/>
                        <Link to="/Contact">
                        <Menu label = "CONTACT US"/></Link>
                        <Media icon="fa fa-facebook"/>
                        <Media icon="fa fa-youtube"/>
                        <Media icon="fa fa-linkedin"/>  
                        </ul>
                        </div>

            </nav>
        
    )
}
export default Header;