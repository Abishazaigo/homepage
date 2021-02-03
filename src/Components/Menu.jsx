function Menu(props){
    return(
        <>
        <li className="nav-item">
            <a className="nav-link" href="#">{props.label}</a>
        </li>
        <li className="nav-item">
        <a href="#" className={props.icon}></a>
        </li>
        </>
    )
}
export default Menu;