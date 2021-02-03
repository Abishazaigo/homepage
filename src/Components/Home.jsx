import Header from './Header';
import Recent from './Recent';
import Products from './Products';
import Footer from './Footer';
import Video from './Video';
import Gallery from './Gallery';
import Bgimage from '../Images/bgimage.jpg';
import Image2 from '../Images/image2.jpg';
import Image3 from '../Images/image3.png';
import '../Styles/Web.css';
import Bgimage2 from '../Images/bgimage2.jpg';
import Bgimage21 from '../Images/bgimage21.jpg';
import Bgimage22 from '../Images/bgimage22.jpg';
import Bgimage23 from '../Images/bgimage23.jpg';
function Home(){
    return(
        <div>
        <Header />
        <div className="row">
        <img class="bgimage" src={Bgimage} />
        <div className="top-left">
            <p>Welcome to the</p>
            <p>Art of using Herbs</p>
            <div className="transbox">
                <button type="button">Contact us</button>
            </div>
        </div>
        <img src={Image2} className="image2"></img>
        </div>
        <div className="row">
        <div className="col-2">

        </div>
        <div className="col-5 p-4">
            <h3>About us</h3>
            <p align="justify">Since 1999, Internet Marketing Ninjas has mastered the art of creating expert content
                that goes viral, earns trusted links, and ranks at the top of Google. Looking to transform
                your content marketing strategy? Learn how our Ninja team can help by scheduling a FREE
                consultation today.</p>
            <button type="button">View more</button>
        </div>
        <div className="col-3">
            <img className="image3" src={Image3}/>
        </div>
        <div className="col-2">

        </div>
    </div>
    <div>
        <h3 className="topic">Featured products</h3>
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
        <h3 class="topic">Our Gallery</h3>
            <div class="row">
                <Gallery image={Bgimage2} />
                <Gallery image={Bgimage21} />
                <Gallery image={Bgimage22} />
                <Gallery image={Bgimage23} />
            </div>
        <Recent />
        <Footer />
        </div>
    )
}
export default Home;