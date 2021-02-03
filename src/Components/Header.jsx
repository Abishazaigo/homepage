import '../Styles/Web.css';
import Menu from '../Components/Menu';
import Logo from '../Images/image.png';
function Header(){
    return (
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <img className="logo" src={Logo}/>
                    </div>
                    <div className="col-lg-8 text-white">
                    <div className="navbar-collapse collapse justify-content-center order-2">
                        <ul className="navbar-nav">
                        <Menu label="HOME"/>
                        <Menu label="HERBALIFE"/>
                        <Menu label = "STORE"/>
                        <Menu label = "GALLERY"/>
                        <Menu label = "BLOG"/>
                        <Menu label = "CONTACT US"/>
                        </ul>
                    </div>
                    </div>
                    <div className="col-1">
                        <ul className="navbar-nav">
                            <Menu icon="fa fa-facebook"/>
                            <Menu icon="fa fa-youtube"/>
                            <Menu icon="fa fa-linkedin"/>  
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header;