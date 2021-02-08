import {Link} from "react-router-dom";
import Menu from './Menu';
import Media from './Media';
import Logo from '../../Images/logo.png';
function Header(){
    return (
        <nav className="navbar navbar-expand-md bg-danger navbar-dark">
            <a className="navbar-brand" href="#"><img className="logo" src={Logo} height="30%" width="30%"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto">
                    <Menu label="HOME"/>
                    <Menu label="HERBALIFE"/>
                    <Menu label = "STORE"/>
                    <Menu label = "GALLERY"/>
                    <Menu label = "BLOG"/>
                    <Link to="/contact">
                    <Menu label = "CONTACT US"/>
                    </Link>
                    <Media icon="fa fa-fw fa-facebook"/>
                    <Media icon="fa fa-fw fa-youtube"/>
                    <Media icon="fa fa-fw fa-linkedin"/>  
                </div>
            </div>
        </nav>
        
    )
}
export default Header;