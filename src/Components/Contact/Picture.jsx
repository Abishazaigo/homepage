import ColSm6 from '../home/ColSm6';
function Picture(props) {
    return(
        <>
            <img className={props.className} src={props.src} height={props.height} width={props.width} />
        </>
    )
}
export default Picture;