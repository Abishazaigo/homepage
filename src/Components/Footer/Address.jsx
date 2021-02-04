function Address(props){
    return(
        <div>
            <span>
            <i className="icon-pic material-icons">{props.icon}</i>
            <span className="icon-label">{props.value}</span>
            </span>
        </div>
    )
}
export default Address;