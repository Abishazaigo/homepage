import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Gallery from './Gallery';
import Address from '../Footer/Address';
import Media from '../Header/Media';
import Form from './Form';
import ColumnWidth3 from '../ColumnWidth3';
import ColumnWidth6 from '../ColumnWidth6';
import Herbalife from '../../Images/herbalife.jpg';
import Products from '../../Images/products.jpg';
import Natural from '../../Images/made-natural.jpg';
function Contact(){
    return(
        <div>
        <Header />
        <img className="herbalife-bg" src={Herbalife} />
        <div className="bg-content">
            <p className="contact-topic">Contact Us</p>
            <div>
                <button type="button"  className="contact-button">CONTACT US</button>
            </div>
        </div>
        <p className="contact-top">Contact Information</p>
        <div className="row">
            <ColumnWidth3 />
            <ColumnWidth6>
                <p className="contact-text">1999, Internet Marketing Ninjas has mastered the art of creating expert
                    content
                    that goes viral, earns trusted links, and ranks at the top of Google. Looking to transform
                    your content marketing strategy? Learn how our Ninja team can help by scheduling a FREE
                    consultation today.</p>
            </ColumnWidth6>
            <ColumnWidth3 />
        </div>
        <div className="row">
        <Gallery className="products" picture={Products} />
        <Gallery className="natural-made" picture={Natural} />
        <div className="transbox1">
            <p className="icon-label">Address Information:</p>
                <Address icon="add_location" />
                <Address value="No:350, Marketing Ninjas has" />
                <Address icon="local_phone" />
                <Address value="9845972640" />
                <Address icon="local_post_office" />
                <Address value="herbal@gmaiil.com" />
            <div>
                <Media icon="fa fa-facebook"/>
                <Media icon="fa fa-youtube"/>
                <Media icon="fa fa-linkedin"/>  
            </div>
        </div>
    </div>
    <div id="map-container-google-1" className="z-depth-1-half map-container">
        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
        allowfullscreen></iframe>
    </div>
    <p className="contact-top">Submission Form</p>
        <Form />
        <p></p>
        <Footer />
        </div>
    )
}
export default Contact;