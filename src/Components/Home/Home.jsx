import Header from '../Header/Header';
import Recent from './Recent';
import Products from './Products';
import Footer from '../Footer/Footer';
import Video from './Video';
import Pictures from './Pictures';
import Herbalife from '../../Images/herbalife-product.jpg';
import Medicine from '../../Images/medicine.jpg';
import Plant from '../../Images/plant.png';
import '../Styles/Web.css';
import Protein from '../../Images/protein.jpg';
import Prolessa from '../../Images/prolessa.jpg';
import Herbalifecell from '../../Images/herbalife-cell.jpg';
import Healthydrink from '../../Images/healthydrink.jpg';
import Naturaldrink from '../../Images/naturaldrink.jpg';
import Freshdrink from '../../Images/freshjuice.jpg';
import Medicinal from '../../Images/medicinal.jpg';
import ColumnWidth2 from '../ColumnWidth2';
import ColumnWidth3 from '../ColumnWidth3';
import ColumnWidth5 from '../ColumnWidth5';
function Home(){
    return(
        <div>
        <Header />
        <div className="row">
        <img className="home-image" src={Herbalife} />
        <div className="welcome-content">
            <p>Welcome to the</p>
            <p>Art of using Herbs</p>   
            <button type="button" className="contact-us">Contact us</button>
        </div>
        <img src={Medicine} className="medicine"></img>
        </div>
        <div className="row">
        <ColumnWidth2 />
        <ColumnWidth5 className="p-4">
            <h3>About us</h3>
            <p align="justify">Since 1999, Internet Marketing Ninjas has mastered the art of creating expert content
                that goes viral, earns trusted links, and ranks at the top of Google. Looking to transform
                your content marketing strategy? Learn how our Ninja team can help by scheduling a FREE
                consultation today.</p>
            <button type="button" className="view-more">View more</button>
        </ColumnWidth5>
        <ColumnWidth3>
            <img className="plant" src={Plant}/>
        </ColumnWidth3>
        <ColumnWidth2 />
    </div>
    <div>
        <h3 className="topic">Featured products</h3>
        <div className="row">   
       <ColumnWidth2 />
		<Products image={Protein} name="Herbalife Formula" price="₹2000.00" className="buy-button" text="Buy Now" />
		<Products image={Prolessa} name="Duo 30 Day Program" price="₹2000.00" className="buy-button" text="Buy Now" />
		<Products image={Herbalifecell} name="Herbalife Cell U Loss" price="₹2000.00" className="buy-button" text="Buy Now" />
		<Products image={Protein} name="Herbalife Protein" price="₹2000.00" className="buy-button" text="Buy Now" />
        <div className="col-2">
        </div>
        </div>
        </div>
        <Video />
        <h3 className="topic">Best sellers</h3>
        <div className="row">   
        <div className="col-2">
        </div>
        <Products name="Herbalife Formula" />
        <Products name="Duo 30 Day Program" />
        <Products name="Herbalife Cell U Loss" />
        <Products name="Herbalife Protein" />
        <div className="col-2">
        </div>
        </div>
        <h3 className="topic">Our Gallery</h3>
            <div className="row">
                <Pictures image={Healthydrink} />
                <Pictures image={Naturaldrink} />
                <Pictures image={Freshdrink} />
                <Pictures image={Medicinal} />
            </div>
        <Recent />
        <Footer />
        </div>
    )
}
export default Home;