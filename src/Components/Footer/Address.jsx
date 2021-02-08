function Address(props){
    return(
        <div>
            <i className="icon-pic material-icons">{props.icon}</i>
            <span className="icon-label">{props.value}</span>
        </div>
    )
}
export default Address;