function Gallery(props){
    return(
        <div>
            <div class="col-3">
                <img class="bgimage2" src={props.image}/>
            </div>
        </div>
    )
}
export default Gallery;