import Youtube from '../../Images/youtube-bg.jpg';
import ColumnWidth2 from '../ColumnWidth2';
import ColumnWidth4 from '../ColumnWidth4';
function Video(){
    return(
        <div>
        <img src={Youtube} height="450px" width="100%"/>
    <div class="row">
        <ColumnWidth2 />
        <ColumnWidth4 className="p-4">
            <div class="story-topic">
                <h3>Our Story</h3>
                <p align="justify">Since 1999, Internet Marketing Ninjas has mastered the art of creating expert content
                    that goes viral, earns trusted links, and ranks at the top of Google. Looking to transform
                    your content marketing strategy? Learn how our Ninja team can help by scheduling a FREE
                    consultation today.</p>
                <button type="button" className="view-more-about">View more</button>
            </div>
        </ColumnWidth4>
        <ColumnWidth4 className="p-4">
            <iframe class="youtube" src="https:www.youtube.com/embed/SnuYD9_nrD4">
            </iframe>
        </ColumnWidth4>
        <ColumnWidth2 />
    </div>
    </div>
    )
}
export default Video;