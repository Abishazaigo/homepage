import '../Styles/Web.css';
import Icon from '../Images/icon.png';
import Address from '../Components/Address';
function Footer() {
    return (
        <div>
        <div class="foottop">
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-3 p-4">
                    <img class="icon" src={Icon}/>
                        <p class="pass1">Internet Marketing Ninjas has mastered the art of creating
                        expert contentthat goes viral, earns trusted links</p>
                        <p></p>
                        <p class="pass1">Internet Marketing Ninjas has mastered the art of creating
                        expert content
                    that goes viral, earns trusted links</p>
                </div>
                <div className="col-3 p-4">
                <p class="pass2">Contact Us</p>
                <div class="item">
                        <Address icon="add_location" />
                        <Address value="No:350, Marketing Ninjas has" />
                        <Address icon="local_phone" />
                        <Address value="9845972640" />
                        <Address icon="local_post_office" />
                        <Address value="herbal@gmaiil.com" />
                        </div>
                </div>
                <div className="col-3 p-4">
                        <p class="pass2">Subscribe Us</p>
                        <p class="pass1">Marketing Ninjas has mastered the art of creating expert
                        content that goes viral</p>
                        <button className="btn-success">View Email address ✉</button>
                </div>
                <div className="col-1">

                </div>
            </div>
        </div>
        <div class="bot">
            <p class="com">copyright@ 2020 Herbalife
            </p>
        </div>
        </div>
    )
}

export default Footer;