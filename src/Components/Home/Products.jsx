import Picture from '../contact/Picture';
import Button from '../home/Button';
function Products(props){
    return(
        <div className="card col-sm-2 md-4 lg-8">
                    <Picture className="card-image-top" src={props.image} alt="Card image"  />
                    <div className="card-body">
                        <p align="center" className="card-title">{props.name}</p>
                        <p align="center" class="card-text">{props.price}</p>
                        <Button className="buy-button" label="Buy Now"/>
                    </div>
        </div>
    )
}
export default Products;