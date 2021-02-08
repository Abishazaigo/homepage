import Icon from '../../Images/icon.png';
import Address from './Address';
import Row from '../home/Row';
import Picture from '../contact/Picture';
function Footer() {
    let date=new Date();
    let year=date.getFullYear();
    return (
        <footer className="footer-color text-white text-center text-lg-start">
            <div className="container p-4">
                <Row>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <Picture className="icon" src={Icon} />
                        <p className="footer-info">Internet Marketing Ninjas has mastered the art of creating
                        expert contentthat goes viral, earns trusted links</p>
                        <hr />
                        <p className="footer-info">Internet Marketing Ninjas has mastered the art of creating
                        expert content that goes viral, earns trusted links</p>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                        <h2 className="footer-contact">Contact Us</h2>
                        <div className="contact-detail">
                            <Address icon="add_location" value="No:350, Marketing Ninjas has"  />
                            <Address icon="local_phone" value="9845972640"/>
                            <Address icon="local_post_office" value="herbal@gmaiil.com" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                        <h2 className="footer-contact">Subscribe Us</h2>
                        <p className="footer-info">Marketing Ninjas has mastered the art of creating expert
                        content that goes viral</p>
                        <input type="text" className="email" placeholder="Your Email address" />
                        <button>✉</button> 
                    </div>
                    <div className="col-lg-1"></div>
                </Row>
            </div>
            <div className="text-center bg-danger p-1">
                <h6>copyright@ {year} Herbalife</h6>
            </div> 
        </footer>
    )
}
export default Footer;