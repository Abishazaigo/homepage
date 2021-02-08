import Header from '../header/Header';
import Footer from '../footer/Footer';
import Picture from './Picture';
import Address from '../footer/Address';
import Media from '../header/Media';
import Form from './Form';
import ColSm3 from '../home/ColSm3';
import ColSm6 from '../home/ColSm6';
import Herbalife from '../../Images/herbalife.jpg';
import Products from '../../Images/products.jpg';
import Natural from '../../Images/made-natural.jpg';
import Button from '../home/Button';
import Row from '../home/Row';

function Contact(){
    return(
        <div>
          <Header />
            <Row>
                <Picture className="herbalife-bg col-12" src={Herbalife} />
            </Row>
            <div className="bg-content col-lg-12 md-6 sm-3">
                <p className="contact-topic">Contact Us</p>
                <Button className="contact-button" label="CONTACT US" />
            </div>
            <p className="contact-top">Contact Information</p>
            <Row>
                <ColSm3 />
                <ColSm6 className="lg-12 md-6 sm-3">
                    <p className="contact-text">1999, Internet Marketing Ninjas has mastered the art of creating expert
                        content
                        that goes viral, earns trusted links, and ranks at the top of Google. Looking to transform
                        your content marketing strategy? Learn how our Ninja team can help by scheduling a FREE
                        consultation today.</p>
                </ColSm6>
                <ColSm3 />
            </Row>
            <Row>
            <ColSm6>
            <Picture className="products" height="100%" width="100%" src={Products} />
            </ColSm6>
            <ColSm6>
            <Picture className="natural-made" height="100%" width="100%" src={Natural} />
            </ColSm6>
            <div className="transbox1">
                <p className="icon-label">Address Information:</p>
                    <Address icon="add_location" value="No:350, Marketing Ninjas has" />
                    <Address icon="local_phone" value="9845972640" />
                    <Address icon="local_post_office" value="herbal@gmaiil.com" />
                <div>
                    <Media icon="fa fa-facebook"/>
                    <Media icon="fa fa-youtube"/>
                    <Media icon="fa fa-linkedin"/>  
                </div>
            </div>
            </Row>
            <div id="map-container-google-1" className="z-depth-1-half map-container">
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                allowfullscreen></iframe>
            </div>
            <p className="contact-top">Submission Form</p>
            <Form />
            <Footer />
        </div>
    )
}
export default Contact;