import Youtube from '../../Images/youtube-bg.jpg';
import ColSm2 from './ColSm2';
import ColSm4 from './ColSm4';
import Picture from '../contact/Picture';
import Row from '../home/Row';
import Button from '../home/Button';
function Video(){
    return(
        <div>
        <Picture className="youtube-bg" src={Youtube} height="30%" width="100%"/>
    <Row>
        <ColSm2 />
        <ColSm4 className="md-6 lg-12 p-4 ">
            <div class="story-topic col-md-6 lg-12">
                <h3>Our Story</h3>
                <p align="justify">Since 1999, Internet Marketing Ninjas has mastered the art of creating expert content
                    that goes viral, earns trusted links, and ranks at the top of Google. </p>
                <Button className="view-more-about" label="View more" />
            </div>
        </ColSm4>
        <ColSm4 className="md-6 lg-12 p-4 ">
            <iframe class="youtube" src="https:www.youtube.com/embed/SnuYD9_nrD4">
            </iframe>
        </ColSm4>
        <ColSm2 />
    </Row>
    </div>
    )
}
export default Video;