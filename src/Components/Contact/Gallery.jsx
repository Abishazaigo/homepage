import ColumnWidth6 from '../ColumnWidth6';
function Gallery(props) {
    return(
        <ColumnWidth6>
            <img className={props.class} src={props.picture}/>
        </ColumnWidth6>
    )
}
export default Gallery;