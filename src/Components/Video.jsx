import Bgimage1 from '../Images/bgimage1.jpg';
function Video(){
    return(
        <div>
        <img src={Bgimage1} height="450px" width="100%"/>
    <div class="row">
        <div class="col-2">

        </div>
        <div class="col-4 p-4">
            <div class="top-pos">
                <h3>Our Story</h3>
                <p align="justify">Since 1999, Internet Marketing Ninjas has mastered the art of creating expert content
                    that goes viral, earns trusted links, and ranks at the top of Google. Looking to transform
                    your content marketing strategy? Learn how our Ninja team can help by scheduling a FREE
                    consultation today.</p>
                <button type="button">View more</button>
            </div>
        </div>
        <div class="col-4 p-4">
            <iframe class="youtube" src="https:www.youtube.com/embed/SnuYD9_nrD4">
            </iframe>
        </div>
        <div class="col-2">

        </div>
    </div>
    </div>
    )
}
export default Video;