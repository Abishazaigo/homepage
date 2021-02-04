function ColumnWidth1(props){
    return(
        <div className={"col-sm-1 "+props.className}>{props.children}
        </div>
    )
}
export default ColumnWidth1;