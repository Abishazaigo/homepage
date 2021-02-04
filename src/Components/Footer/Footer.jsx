import '../Styles/Web.css';
import Icon from '../../Images/icon.png';
import Address from './Address';
import ColumnWidth1 from '../ColumnWidth1';
import ColumnWidth2 from '../ColumnWidth2';
import ColumnWidth3 from '../ColumnWidth3';
function Footer() {
    return (
        <div>
        <div className="footer-color">
            <div className="row">
                <ColumnWidth2 />
                <ColumnWidth3 className="p4">
                    <img className="icon" src={Icon}/>
                        <p className="footer-info">Internet Marketing Ninjas has mastered the art of creating
                        expert contentthat goes viral, earns trusted links</p>
                        <p></p>
                        <p className="footer-info">Internet Marketing Ninjas has mastered the art of creating
                        expert content
                    that goes viral, earns trusted links</p>
                </ColumnWidth3>
                <ColumnWidth3 className="p4">
                <p className="footer-contact">Contact Us</p>
                <div className="contact-detail">
                        <Address icon="add_location" />
                        <Address value="No:350, Marketing Ninjas has" />
                        <Address icon="local_phone" />
                        <Address value="9845972640" />
                        <Address icon="local_post_office" />
                        <Address value="herbal@gmaiil.com" />
                        </div>
                </ColumnWidth3>
                <ColumnWidth3 className="p4">
                        <p className="footer-contact">Subscribe Us</p>
                        <p className="footer-info">Marketing Ninjas has mastered the art of creating expert
                        content that goes viral</p>
                        <input type="text" className="email" placeholder="Your Email address" />
                        <button>✉</button>
                </ColumnWidth3>
                <ColumnWidth1 />
            </div>
        </div>
        <div className="footer-bottom">
            <p className="footer-label">copyright@ 2020 Herbalife
            </p>
        </div>
        </div>
    )
}

export default Footer;