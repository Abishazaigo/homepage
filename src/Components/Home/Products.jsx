import '../Styles/Web.css';
function Products(props){
    return(
        <div className="card col-2">
                    <img src={props.image} alt="Card image"  />
                    <div className="card-body">
                        <p className="card-title">{props.name}</p>
                        <p class="card-text">{props.price}</p>
                        <button className={props.className}>{props.text}</button>
                    </div>
        </div>
    )
}
export default Products;