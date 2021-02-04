function Menu(props){
    return(
        <>
        <li className="nav-item">
            <a className="nav-link" href="#">{props.label}
            </a>
        </li>
        </>
    )
}
export default Menu;