import Header from '../header/Header';
import Recent from './Recent';
import Products from './Products';
import Footer from '../footer/Footer';
import Video from './Video';
import Herbalife from '../../Images/herbalife-product.jpg';
import Medicine from '../../Images/medicine.jpg';
import Plant from '../../Images/plant.png';
import Protein from '../../Images/protein.jpg';
import Prolessa from '../../Images/prolessa.jpg';
import Herbalifecell from '../../Images/herbalife-cell.jpg';
import Healthydrink from '../../Images/healthydrink.jpg';
import Naturaldrink from '../../Images/naturaldrink.jpg';
import Freshdrink from '../../Images/freshjuice.jpg';
import Medicinal from '../../Images/medicinal.jpg';
import ColSm2 from './ColSm2';
import ColSm3 from './ColSm3';
import ColSm5 from './ColSm5';
import Row from '../home/Row';
import Picture from '../contact/Picture';
import Button from '../home/Button';
function Home(){
    return(
       <div>
        <Header />
        <Row>
            <Picture className="col-12 home-image" src={Herbalife} />
            <div className="col-4 welcome-content">
                <h4>Welcome to the</h4>
                <h4>Art of using Herbs</h4>   
                <Button className="contact-us" label="Contact us" />
            </div>
            <Picture src={Medicine} className="col-5 medicine" height="150px" width="75px"/>
        </Row>       
        <Row>
            <ColSm2 />
            <ColSm5 className="md-6 lg-12 p-4">
                <h3>About us</h3>
                <p align="justify">Since 1999, Internet Marketing Ninjas has mastered the art of creating expert content
                    that goes viral, earns trusted links, and ranks at the top of Google. Looking to transform
                    your content marketing strategy? Learn how our Ninja team can help by scheduling a FREE
                    consultation today.</p>
                <Button className="view-more" label="View more" />
            </ColSm5>
            <ColSm3 className="md-6 lg-12">
                <Picture className="plant" src={Plant} height="75%" width="65%"/>
            </ColSm3>
            <ColSm2 />
        </Row>
        <div>
        <h3 className="topic">Featured products</h3>
        <Row>   
       <ColSm2 />
		<Products image={Protein} name="Herbalife Formula 30 Day Program" price="₹2000.00" />
		<Products image={Prolessa} name="Duo 30 Day Program" price="₹2000.00" />
		<Products image={Herbalifecell} name="Herbalife Cell U Loss" price="₹2000.00" />
		<Products image={Protein} name="Herbalife Protein 15 Day Program" price="₹2000.00" />
        <ColSm2 />
        </Row>
        </div>
        <Video />
        <h3 className="topic">Best sellers</h3>
        <Row>      
       <ColSm2 />
		<Products image={Protein} name="Herbalife Formula 30 Day Program" price="₹2000.00" className="buy-button" text="Buy Now" />
		<Products image={Prolessa} name="Duo 30 Day Program" price="₹2000.00" className="buy-button" text="Buy Now" />
		<Products image={Herbalifecell} name="Herbalife Cell U Loss" price="₹2000.00" className="buy-button" text="Buy Now" />
		<Products image={Protein} name="Herbalife Protein 15 Day Program" price="₹2000.00" className="buy-button" text="Buy Now" />
        <ColSm2 />
        </Row>
        <h3 className="topic">Our Gallery</h3>
            <Row>
                <Picture className="picture" src={Healthydrink} />
                <Picture className="picture" src={Naturaldrink} />
                <Picture className="picture" src={Freshdrink} />
                <Picture className="picture" src={Medicinal} />
            </Row>
        <Recent />
        <Footer />
        </div>
    )
}
export default Home;